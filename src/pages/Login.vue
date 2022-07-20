<template>
  <h1 class="text-center titulo">Login</h1>

  <form class="form-login">
    <input v-model="usuario.email" type="email" placeholder="E-mail" />
    <input v-model="usuario.senha" type="password" placeholder="Senha" />
    <button @click="logar" type="button">Entrar</button>
    <button @click="novaConta" class="mt-5">Crirar minha conta</button>
  </form>
</template>

<script>
import { mapActions } from "pinia";
import { usePerfilStore } from "../stores/perfilStore";
import { useAlertaStore } from "../stores/alertaStore";
import { useLoadingStore } from "../stores/loadingStore";

export default {
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapActions(usePerfilStore, ["login"]),
    ...mapActions(useAlertaStore, ["exibirErro"]),
    ...mapActions(useLoadingStore, ["exibirLoading", "fecharLoading"]),
    async logar() {
      try {
        this.exibirLoading()
        await this.login(this.usuario);
        this.$router.push("/home");
      } catch (error) {
        this.exibirErro(error.body.message);
      } finally {
        this.fecharLoading()
      }
    },
    novaConta() {
      this.$router.push("/nova-conta");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
  margin-bottom: 20px;
}
.form-login {
    background-color: white;
    width: 600px;
    margin: auto;
    padding: 40px 60px;
    border-radius: var(--border-radius);
    box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
}

.form-login input:not([type=checkbox]),
.form-login select {
    width: 100%;
    margin-bottom: 20px;
}

.form-login button {
    width: 100%;
}
</style>
