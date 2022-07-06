import { defineStore } from "pinia";
import { login } from "../api/login";

export const useUsuarioStore = defineStore("usuario", {
  state: () => ({
    usuarioLogado: {},
  }),
  actions: {
    async login() {
      // comunicação com a api...
      await login({ email: "jao@gmail.com", senha: "123" })

      // return new Promise((resolve, reject) => {
      //   console.log("Clicou no login...");
      //   setTimeout(() => {
      //     this.usuarioLogado = { nome: "Jão da Silva", email: "jao@gmail.com" };
      //     resolve();
      //   }, 500);
      // });
    },
  },
});
