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

export default {
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapActions(useUsuarioStore, ["login"]),
    async logar() {
      await this.login()
      this.$router.push("/home")
    },
  },
};
</script>
