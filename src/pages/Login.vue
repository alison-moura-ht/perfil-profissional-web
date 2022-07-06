<template>
  <h1 class="text-center titulo">Login</h1>

  <form class="form-login">
    <input v-model="usuario.email" type="email" placeholder="E-mail" />
    <input v-model="usuario.senha" type="password" placeholder="Senha" />
    <button @click="logar" type="button">Entrar</button>
  </form>
</template>

<script>
import { mapActions } from "pinia";
import { useUsuarioStore } from "../stores/usuarioStore";
import { useAlertaStore } from "../stores/alertaStore";

export default {
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapActions(useUsuarioStore, ["login"]),
    ...mapActions(useAlertaStore, ["exibirErro"]),
    async logar() {
      try {
        await this.login();
        this.$router.push("/home");
      } catch (error) {
        this.exibirErro(error.body.message);
      }
    },
  },
};
</script>
