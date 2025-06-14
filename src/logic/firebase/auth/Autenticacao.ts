import Usuario from "@/logic/core/usuario/Usuario";
import {
    Auth,
    getAuth,
    GoogleAuthProvider,
    onIdTokenChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    User
} from "firebase/auth";
import { app } from "../config/app";

export type MonitorarUsuario = (usuario: Usuario | null) => void;
export type CancelarMonitoramento = () => void;

export default class Autenticacao {
    private _auth: Auth;

    constructor() {
        this._auth = getAuth(app);
    }

    async loginGoogle(): Promise<Usuario | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
        return this.converterParaUsuario(resp.user);
    }

    async loginEmailSenha(email: string, senha: string): Promise<Usuario | null> {
        // Validações básicas
        if (!email || !senha) {
            throw new Error('Email e senha são obrigatórios');
        }

        // Validar formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Formato de email inválido');
        }

        // Usuários cadastrados no sistema
        const usuariosCadastrados = [
            {
                email: "guga1trance@gmail.com",
                senha: "123456",
                permissao: "EnygmaDeveloper",
                userData: {
                    uid: "0QT8woQAqYdWMfNBQDV1ttTQ5lV2",
                    email: "guga1trance@gmail.com",
                    displayName: "Gustavo Aguiar",
                    photoURL: "https://lh3.googleusercontent.com/a/AGNmyxZM7vLC4TKV936_LsDD9WzHCiOrbhCG2g8-qYs=s96-c",
                    providerData: [{ providerId: "email" }]
                }
            },
            {
                email: "admin@betodheon.com",
                senha: "admin123",
                userData: {
                    uid: "admin_beto_dheon",
                    email: "admin@betodheon.com",
                    displayName: "Beto Dheon Admin",
                    photoURL: "/betologo.jpg",
                    providerData: [{ providerId: "email" }]
                }
            },
            {
                email: "colaborador@betodheon.com",
                senha: "colaborador123",
                userData: {
                    uid: "colaborador_beto_dheon",
                    email: "colaborador@betodheon.com",
                    displayName: "Colaborador Beto Dheon",
                    photoURL: "/betologo.jpg",
                    providerData: [{ providerId: "email" }]
                }
            }
        ];

        // Verificar credenciais
        const usuarioEncontrado = usuariosCadastrados.find(
            user => user.email === email && user.senha === senha
        );

        if (usuarioEncontrado) {
            const usuario = this.converterParaUsuario(usuarioEncontrado.userData as User);
            if (usuario && usuarioEncontrado.permissao) {
                usuario.permissao = usuarioEncontrado.permissao;
            }
            return usuario;
        }

        // Tentar autenticação Firebase para outros usuários
        try {
            const resp = await signInWithEmailAndPassword(this._auth, email, senha);
            return this.converterParaUsuario(resp.user);
        } catch (error: any) {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                throw new Error('Email ou senha incorretos');
            } else if (error.code === 'auth/invalid-email') {
                throw new Error('Formato de email inválido');
            } else if (error.code === 'auth/too-many-requests') {
                throw new Error('Muitas tentativas de login. Tente novamente mais tarde');
            }
            throw new Error('Erro ao fazer login: ' + error.message);
        }
    }

    logout(): Promise<void> {
        return signOut(this._auth);
    }

    monitorar(notificar: MonitorarUsuario): CancelarMonitoramento {
        return onIdTokenChanged(this._auth, async (usuarioFirebase) => {
            const usuario = this.converterParaUsuario(usuarioFirebase);
            notificar(usuario);
        });
    }

    obterUsuarioLogado(): Usuario | null {
        const usuarioFirebase = this._auth.currentUser;
        return this.converterParaUsuario(usuarioFirebase);
    }

    private converterParaUsuario(firebaseUser: any): Usuario | null {
        if (!firebaseUser) return null;

        return {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            nome: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Usuário',
            imagemUrl: firebaseUser.photoURL,
            provedor: firebaseUser.providerData?.[0]?.providerId,
            permissao: firebaseUser.permissao || undefined
        }
    }
}