import { defineStore } from "pinia";
import { buscarNotificacao, buscarNotificacoesPerfil, marcarNotificaoLida } from "../api/notificacao";

export const useNotificacaoStore = defineStore("notificacao", {
  state: () => ({
    notificacoes: [],
  }),
  actions: {
    async buscarNotificacoesPerfil(perfilId) {
        this.notificacoes = await buscarNotificacoesPerfil(perfilId)
    },
    async buscarNotificacao(notificaoId) {
      return await buscarNotificacao(notificaoId)
    },
    async marcarNotificaoLida(notificaoId) {
      return await marcarNotificaoLida(notificaoId)
    }
  },
});
