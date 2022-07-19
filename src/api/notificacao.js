import { mande } from "mande"
import { usePerfilStore } from "../stores/perfilStore"

const notificacao = mande("http://localhost:3000/notificacao", {})
const notificacaoPerfil = mande("http://localhost:3000/notificacao/perfil", {})

function setToken() {
    const store = usePerfilStore()
    notificacao.options.headers.token = store.usuarioLogado.token
    notificacaoPerfil.options.headers.token = store.usuarioLogado.token
}

export function buscarNotificacoesPerfil(pefilId) {
    setToken()
    return notificacaoPerfil.get(pefilId)
}

export function buscarNotificacao(notificaoId) {
    setToken()
    return notificacao.get(notificaoId)
}

export function marcarNotificaoLida(notificaoId) {
    setToken()
    return notificacao.put(`/lida/${notificaoId}`)
}