import servicos from "@/logic/core"
import Usuario from "@/logic/core/usuario/Usuario"
import Autenticacao from "@/logic/firebase/auth/Autenticacao"
import { createContext, useEffect, useState } from "react"

interface AutenticacaoProps {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    loginEmailSenha: (email: string, senha: string, lembrarSenha?: boolean, manterConectado?: boolean) => Promise<Usuario | null>
    logout: () => Promise<void>
    atualizarUsuario: (novoUsuario: Usuario) => Promise<void>
}

const AutenticacaoContext = createContext<AutenticacaoProps>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    loginEmailSenha: async () => null,
    logout: async () => {},
    atualizarUsuario: async () => {}
})

export function AutenticacaoProvider(props: any) {

    const [carregando, setCarregando] = useState<boolean>(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    useEffect(() => {
        // Verificar se há usuário salvo no localStorage
        const usuarioSalvo = localStorage.getItem('usuarioAutenticado')
        const manterConectado = localStorage.getItem('manterConectado')
        
        if (usuarioSalvo && manterConectado === 'true') {
            try {
                const usuarioData = JSON.parse(usuarioSalvo)
                console.log('Usuário recuperado do localStorage:', usuarioData)
                setUsuario(usuarioData)
                setCarregando(false)
                return // Se já tem usuário salvo, não precisa continuar o monitoramento
            } catch (error) {
                console.error('Erro ao recuperar usuário salvo:', error)
                localStorage.removeItem('usuarioAutenticado')
                localStorage.removeItem('manterConectado')
            }
        }

        const cancelar = servicos.usuario.monitorarAutenticacao((usuario) => {
            setUsuario(usuario)
            
            // Salvar usuário se "manter conectado" estiver ativo
            if (usuario && localStorage.getItem('manterConectado') === 'true') {
                localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario))
            }
            
            setCarregando(false)
        })
        
        setCarregando(false)
        return () => cancelar()
    }, [])

    async function atualizarUsuario(novoUsuario: Usuario) {
        if (usuario && usuario.email !== novoUsuario.email) return logout()
        if (usuario && novoUsuario && usuario.email === novoUsuario.email) {
            await servicos.usuario.salvar(novoUsuario)
            setUsuario(novoUsuario)
        }
    }

    async function loginGoogle() {
        const usuario = await servicos.usuario.loginGoogle()
        setUsuario(usuario)
        return usuario
    }

    async function loginEmailSenha(email: string, senha: string, lembrarSenha?: boolean, manterConectado?: boolean) {
        const usuario = await servicos.usuario.loginEmailSenha(email, senha)
        
        if (usuario) {
            setUsuario(usuario)
            
            // Gerenciar "lembrar senha"
            if (lembrarSenha) {
                localStorage.setItem('lembrarCredenciais', JSON.stringify({ email, senha }))
            } else {
                localStorage.removeItem('lembrarCredenciais')
            }
            
            // Gerenciar "manter conectado"
            if (manterConectado) {
                localStorage.setItem('manterConectado', 'true')
                localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario))
            } else {
                localStorage.removeItem('manterConectado')
                localStorage.removeItem('usuarioAutenticado')
            }
        }
        
        return usuario
    }

    async function logout() {
        await servicos.usuario.logout()
        setUsuario(null)
        
        // Limpar dados salvos
        localStorage.removeItem('usuarioAutenticado')
        localStorage.removeItem('manterConectado')
        
        // Manter credenciais salvas apenas se "lembrar senha" estiver ativo
        const lembrarCredenciais = localStorage.getItem('lembrarCredenciais')
        if (!lembrarCredenciais) {
            localStorage.removeItem('lembrarCredenciais')
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            carregando,
            usuario,
            loginGoogle,
            loginEmailSenha,
            logout,
            atualizarUsuario
        }}>
            {props.children}
        </AutenticacaoContext.Provider>
    )
}

export default AutenticacaoContext