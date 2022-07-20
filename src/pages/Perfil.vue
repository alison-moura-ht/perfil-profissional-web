<template>
  <div class="container">
    <h1>Meu Perfil</h1>

    <div class="flex space-between">
      <h2>Informações pessoais</h2>
      <a target="_blank" :href="`/visualizar-perfil?id=${perfil._id}`">Compartilhar meu perfil</a>
    </div>
    <section>
      <form>
        <div>
          <label for="nome">Nome:</label>
          <input v-model="perfil.nome" type="text" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="perfil.usuario.email" type="email" disabled />
        </div>
        <div>
          <label for="dataNascimento">Data de nascimento:</label>
          <input v-model="perfil.dataNascimento" type="date" />
        </div>
        <div>
          <label for="disponibilidadeMudanca">Disponibilidade de mudança</label>
          <input v-model="perfil.disponibilidadeMudanca" type="checkbox" />
        </div>
        <div>
          <label for="disponibilidadeHorario">Disponibilidade de horário</label>
          <select
            v-model="perfil.disponibilidadeHorario"
            id="disponibilidadeHorario"
          >
            <option value="Meio Período">Meio Período</option>
            <option value="Integral">Integral</option>
          </select>
        </div>
        <fieldset>
          <legend>Escolaridade</legend>
          <form-escolaridade-app :perfil="perfil"></form-escolaridade-app>
          <section>
            <tabela-escolaridade-app
              :educacao="perfil.educacao"
            ></tabela-escolaridade-app>
          </section>
        </fieldset>
        <fieldset>
          <legend>Certificações</legend>
          <form-certificacao-app :perfil="perfil"></form-certificacao-app>
          <section>
            <tabela-certificacao-app
              :certificacoes="perfil.certificacoes"
            ></tabela-certificacao-app>
          </section>
        </fieldset>
        <div>
          <button @click="atualizar" type="button">Salvar Alterações</button>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { usePerfilStore } from "../stores/perfilStore";
import { useAlertaStore } from "../stores/alertaStore";
import { useLoadingStore } from "../stores/loadingStore";
import { formatarDataHTML } from "../utils/formatador";
import FormEscolaridadeApp from "../components/FormEscolaridadeApp.vue";
import TabelaEscolaridadeApp from "../components/TabelaEscolaridadeApp.vue";
import FormCertificacaoApp from "../components/FormCertificacaoApp.vue";
import TabelaCertificacaoApp from "../components/TabelaCertificacaoApp.vue";

export default {
  components: {
    FormEscolaridadeApp,
    TabelaEscolaridadeApp,
    FormCertificacaoApp,
    TabelaCertificacaoApp,
  },
  data: () => ({
    perfil: { usuario: {} },
  }),
  computed: {
    ...mapState(usePerfilStore, ["usuarioLogado"]),
  },
  methods: {
    ...mapActions(usePerfilStore, ["buscarPerfilLogado", "atualizarPerfil"]),
    ...mapActions(useAlertaStore, ["exibirSucesso", "exibirErro"]),
    ...mapActions(useLoadingStore, ["exibirLoading", "fecharLoading"]),
    async atualizar() {
      try {
        this.exibirLoading();
        await this.atualizarPerfil(this.perfil);
        this.exibirSucesso("Alterações salvas com sucesso!");
      } catch (error) {
        this.exibirErro(error.message);
      } finally {
        this.fecharLoading();
      }
    },
  },
  async mounted() {
    this.perfil = await this.buscarPerfilLogado();
    this.perfil.dataNascimento = formatarDataHTML(this.perfil.dataNascimento);
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

form {
  background-color: white;
  width: 800px;
  margin: auto;
  padding: 40px 60px;
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
}
form div {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
form input:not([type="checkbox"]),
select {
  width: 100%;
  margin-top: 5px;
}

form input[type="checkbox"] {
  margin-left: 20px;
}

fieldset {
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 15px;
  border-radius: var(--border-radius);
}

a {
  color: var(--cor-primaria);
  cursor: pointer;
}
</style>
