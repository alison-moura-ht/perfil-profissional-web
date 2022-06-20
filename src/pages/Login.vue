<template>
  <h1 class="text-center titulo">Login</h1>

  <form class="form-login">
    <input v-model="usuario.email" type="email" placeholder="E-mail" />
    <input v-model="usuario.senha" type="password" placeholder="Senha" />
    <button @click="login" type="button">Entrar</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    usuario: {},
  }),
  methods: {
    login() {
      console.log("Clicou no login...");
      setTimeout(() => {
          // comunicação com a api...
          this.$router.push("/home")
      }, 500);
    },
  },
};
</script>
