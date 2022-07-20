import { mande } from "mande"
const API_HOST = import.meta.env.VITE_APP_API_HOST

const api = mande(`${API_HOST}/login`, {})

export function login(usuario) {
    return api.post(usuario)
}