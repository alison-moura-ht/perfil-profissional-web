import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    exibir: false,
  }),
  actions: {
    exibirLoading() {
      this.exibir = true;
    },
    fecharLoading() {
      this.exibir = false;
    },
  },
});
