import { defineStore } from "pinia";

export const useUsuarioStore = defineStore("usuario", {
  state: () => ({
    usuarioLogado: {},
  }),
  actions: {
    login() {
      // comunicação com a api...
      return new Promise((resolve, reject) => {
        console.log("Clicou no login...");
        setTimeout(() => {
          this.usuarioLogado = { nome: "Jão da Silva", email: "jao@gmail.com" };
          resolve();
        }, 500);
      });
    },
  },
});
