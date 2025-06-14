import Autenticacao, { CancelarMonitoramento, MonitorarUsuario } from "@/logic/firebase/auth/Autenticacao"
import Colecao from "@/logic/firebase/db/Colecao"
import Usuario from "./Usuario"

export default class ServicosUsuario {
    private _autenticacao = new Autenticacao()
    private _colecao = new Colecao()

    monitorarAutenticacao(observador: MonitorarUsuario): CancelarMonitoramento {
        return this._autenticacao.monitorar(async usuario => {
            observador(usuario ? {
                ...usuario,
                ...await this.consultar(usuario.email)
            } : null)
        })
    }

    async loginGoogle(): Promise<Usuario | null> {
        try {
            const usuario = await this._autenticacao.loginGoogle()
            if (!usuario) return null

            let usuarioDoBanco = await this.consultar(usuario.email)
            if (!usuarioDoBanco) {
                // Cria novo usuário com a estrutura correta
                const novoUsuario = {
                    email: usuario.email,
                    nome: usuario.nome,
                    imagemUrl: usuario.imagemUrl,
                    id: usuario.uid || usuario.email
                }
                usuarioDoBanco = await this.salvar(novoUsuario)
            }

            return { ...usuario, ...usuarioDoBanco }
        } catch (error) {
            console.error('Erro no login:', error)
            return null
        }
    }

    async loginEmailSenha(email: string, senha: string): Promise<Usuario | null> {
        try {
            const usuario = await this._autenticacao.loginEmailSenha(email, senha)
            if (!usuario) return null

            let usuarioDoBanco = await this.consultar(usuario.email)
            if (!usuarioDoBanco) {
                // Cria novo usuário com a estrutura correta
                const novoUsuario = {
                    email: usuario.email,
                    nome: 'Nome Padrao',
                    imagemUrl: 'URL Padrao',
                    id: usuario.email
                }
                usuarioDoBanco = await this.salvar(novoUsuario)
            }

            return { ...usuario, ...usuarioDoBanco }
        } catch (error) {
            console.error('Erro ao logar com email e senha:', error)
            return null
        }
    }

    logout(): Promise<void> {
        return this._autenticacao.logout()
    }

    async salvar(usuario: Usuario) {
        try {
            // Usa o email como ID do documento para manter consistência
            return await this._colecao.salvar(
                'usuarios', 
                {
                    email: usuario.email,
                    nome: usuario.nome,
                    imagemUrl: usuario.imagemUrl,
                    id: usuario.uid || usuario.email
                }, 
                usuario.email
            )
        } catch (error) {
            console.error('Erro ao salvar usuário:', error)
            throw error
        }
    }

    async consultar(email: string) {
        try {
            return await this._colecao.consultarPorId('usuarios', email)
        } catch (error) {
            console.error('Erro ao consultar usuário:', error)
            return null
        }
    }
}