import { mande } from "mande";
import { usePerfilStore } from "../stores/perfilStore";
const API_HOST = import.meta.env.VITE_APP_API_HOST

const perfil = mande(`${API_HOST}/perfil`, {});

function setToken() {
  const store = usePerfilStore();
  perfil.options.headers.token = store.usuarioLogado.token;
}

export function cadastrar(novoPerfil) {
  return perfil.post(novoPerfil);
}

export function listarUltimosPerfis() {
  return perfil.get();
}

export function buscarPerfil(id) {
  return perfil.get(id);
}

export function atualizarPerfil(perfilAtualizado) {
  setToken();
  return perfil.put(perfilAtualizado._id, perfilAtualizado);
}

export function conectarPerfil(perfilOrigen, perfilDestino) {
  setToken();
  return perfil.post("/conexao", {
    remetente: perfilOrigen,
    destinatario: perfilDestino,
  });
}
