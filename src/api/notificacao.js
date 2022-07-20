import { mande } from "mande"
import { usePerfilStore } from "../stores/perfilStore"
const API_HOST = import.meta.env.VITE_APP_API_HOST

const notificacao = mande(`${API_HOST}/notificacao`, {})
const notificacaoPerfil = mande(`${API_HOST}/notificacao/perfil`, {})

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