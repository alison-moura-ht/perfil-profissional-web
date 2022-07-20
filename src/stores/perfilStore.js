import { defineStore } from "pinia";
import { login } from "../api/login";
import {
  cadastrar,
  listarUltimosPerfis,
  buscarPerfil,
  atualizarPerfil,
  conectarPerfil,
} from "../api/perfil";

export const usePerfilStore = defineStore("perfil", {
  state: () => ({
    usuarioLogado: {},
    ultimosPerfis: [],
  }),
  actions: {
    async login(usuario) {
      this.usuarioLogado = await login(usuario);
      sessionStorage.setItem(
        "usuarioLogado",
        JSON.stringify(this.usuarioLogado)
      );
    },
    recuperarLogin() {
      const usuarioSession = sessionStorage.getItem("usuarioLogado")
      if(usuarioSession) {
        this.usuarioLogado = JSON.parse(usuarioSession)
      }
    },
    logout() {
      this.usuarioLogado = {}
      sessionStorage.removeItem("usuarioLogado")
    },
    async cadastrar(perfil) {
      await cadastrar(perfil);
    },
    async listarUltimosPerfis() {
      this.ultimosPerfis = await listarUltimosPerfis();
    },
    async buscarPerfilLogado() {
      return await buscarPerfil(this.usuarioLogado.perfil);
    },
    async buscarPerfil(perfilId) {
      return await buscarPerfil(perfilId);
    },
    async atualizarPerfil(perfil) {
      return await atualizarPerfil(perfil);
    },
    async conectarPerfil(perfilDestino) {
      return await conectarPerfil(this.usuarioLogado.perfil, perfilDestino);
    },
  },
});
