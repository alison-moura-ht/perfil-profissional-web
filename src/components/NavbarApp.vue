<template>
  <nav>
    <span class="titulo">Perfil Profissional</span>
    <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/perfil">Perfil</router-link>
      <router-link to="/notificacoes">Notificações</router-link>
      <a @click="sair">Sair</a>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "pinia";
import { usePerfilStore } from "../stores/perfilStore";

export default {
  methods: {
    ...mapActions(usePerfilStore, ["logout"]),
    sair() {
      this.logout();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cor-primaria);
  color: white;
  padding: 20px 30px 20px 80px;
}

nav a {
    padding: 10px 15px;
    border-radius: var(--border-radius);
    transition: all 0.3s;
    margin-left: 10px;
}
nav a:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
span.titulo {
  font-size: 25px;
  margin: 0px;
  padding: 0px;
}
</style>
