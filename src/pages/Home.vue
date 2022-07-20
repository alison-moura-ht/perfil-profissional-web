<template>
  <div class="container">
    <h1>Home</h1>
    <h2>Olá! {{ usuarioLogado.nome }}</h2>

    <section>
      <h3>Últimos perfis cadastrados</h3>
      <tabela-perfis-app></tabela-perfis-app>
    </section>

    <section>
      <h3>Últimas notificações</h3>
      <tabela-notificacoes-app></tabela-notificacoes-app>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useNotificacaoStore } from "../stores/notificacaoStore";
import { usePerfilStore } from "../stores/perfilStore";
import TabelaPerfisApp from "../components/TabelaPerfisApp.vue";
import TabelaNotificacoesApp from "../components/TabelaNotificacoesApp.vue";

export default {
  components: {
    TabelaPerfisApp,
    TabelaNotificacoesApp,
  },
  computed: {
    ...mapState(usePerfilStore, ["usuarioLogado"]),
    ...mapState(useNotificacaoStore, ["notificacoes"]),
  },
  methods: {
    ...mapActions(usePerfilStore, ["listarUltimosPerfis"]),
    ...mapActions(useNotificacaoStore, ["buscarNotificacoesPerfil"]),
  },
  mounted() {
    this.listarUltimosPerfis();
    this.buscarNotificacoesPerfil(this.usuarioLogado.perfil);
  },
};
</script>
<style scoped>
h1 {
  margin-top: 50px;
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 20px;
}
h3 {
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}
</style>
