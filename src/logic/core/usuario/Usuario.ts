export default interface Usuario {
    uid?: string
    id?: string
    email: string
    nome: string
    imagemUrl?: string | null // <-- adicionado null
    provedor?: string
    permissao?: string
        
          cpf?: string
          telefone?: string
}