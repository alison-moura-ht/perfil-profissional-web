<template>
  <div class="container">
    <h1>Visualização de Perfil</h1>
    <div class="infos">
      <p><strong>Nome: </strong> {{ perfil.nome }}</p>
      <p>
        <strong>Data de nascimento: </strong>
        {{ formatarData(perfil.dataNascimento) }}
      </p>
      <p>
        <strong>Disponibilidade de horário: </strong>
        {{ perfil.disponibilidadeHorario }}
      </p>
      <p>
        <strong>Disponibilidade de mudança: </strong>
        {{ perfil.disponibilidadeMudanca ? "Sim" : "Não" }}
      </p>
      <p>
        <strong>Data que entrou na plataforma: </strong>
        {{ formatarData(perfil.createdAt) }}
      </p>
      <section>
        <h2>Escolaridade</h2>
        <tabela-escolaridade-app :educacao="perfil.educacao" ></tabela-escolaridade-app>
      </section>
      <section>
        <h2>Certificações</h2>
        <tabela-certificacao-app :certificacoes="perfil.certificacoes" ></tabela-certificacao-app>
      </section>
    </div>
  </div>
  <div class="espacador"></div>
</template>
<script>
import { mapActions } from "pinia";
import { useAlertaStore } from "../stores/alertaStore";
import { buscarPerfil } from "./../api/perfil";
import { formatarData } from "../utils/formatador";
import TabelaEscolaridadeApp from "../components/TabelaEscolaridadeApp.vue";
import TabelaCertificacaoApp from "../components/TabelaCertificacaoApp.vue";

export default {
  data: () => ({
    perfil: {},
  }),
  components: {
    TabelaCertificacaoApp,
    TabelaEscolaridadeApp,
  },
  methods: {
    ...mapActions(useAlertaStore, ["exibirErro"]),
    async carregarPerfil() {
      try {
        this.perfil = await buscarPerfil(this.$route.query.id);
      } catch (error) {
        this.exibirErro(error.message);
      }
    },
    formatarData(data) {
      return formatarData(data);
    },
  },
  mounted() {
    this.carregarPerfil();
  },
};
</script>
<style scoped>
h2 {
    margin-bottom: 10px;
}
p {
  margin-top: 20px;
}
section {
    margin-top: 30px;
}
.espacador {
    margin-bottom: 80px;
}
</style>
