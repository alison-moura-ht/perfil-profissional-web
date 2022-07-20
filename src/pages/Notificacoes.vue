<template>
  <div class="container">
    <h1>Notificações</h1>
    <tabela-notificacoes-app></tabela-notificacoes-app>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useNotificacaoStore } from "../stores/notificacaoStore";
import { usePerfilStore } from "../stores/perfilStore";
import TabelaNotificacoesApp from "../components/TabelaNotificacoesApp.vue";

export default {
  components: {
    TabelaNotificacoesApp,
  },
  computed: {
    ...mapState(usePerfilStore, ["usuarioLogado"]),
  },
  methods: {
    ...mapActions(useNotificacaoStore, ["buscarNotificacoesPerfil"]),
  },
  async mounted() {
    await this.buscarNotificacoesPerfil(this.usuarioLogado.perfil);
  },
};
</script>
<style>
h1 {
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>