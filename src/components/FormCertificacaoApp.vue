<template>
  <button
    v-show="!formCertificacao"
    @click="formCertificacao = true"
    type="button"
  >
    Novo
  </button>
  <div class="form" v-show="formCertificacao">
    <label for="instituicao">Instituição de ensino</label>
    <input
      v-model="certificacao.instituicao"
      id="instituicao"
      type="text"
      placeholder="Ex: High Tech Cursos"
    />

    <label for="titulo">Título</label>
    <input
      v-model="certificacao.titulo"
      id="titulo"
      type="text"
      placeholder="Ex: Fábrica de Programador"
    />

    <label for="cargaHoraria">Carga horária</label>
    <input
      v-model="certificacao.cargaHoraria"
      id="cargaHoraria"
      type="number"
      placeholder="Ex: 12"
    />
    <button @click="adicionarCertificacao" type="button">Adicionar</button>
    <button @click="formCertificacao = false" type="button">Cancelar</button>
  </div>
</template>
<script>
export default {
  props: {
    perfil: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    certificacao: {},
    formCertificacao: false,
  }),
  methods: {
    adicionarCertificacao() {
      this.perfil.certificacoes.push(this.certificacao);
      this.certificacao = {};
      this.formCertificacao = false;
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
  margin-right: 10px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.form input,
.form select {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>
