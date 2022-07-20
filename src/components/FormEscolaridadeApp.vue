<template>
  <button v-show="!formEducacao" @click="formEducacao = true" type="button">
    Novo
  </button>
  <div class="form" v-show="formEducacao">
    <label for="instituicao">Instituição de ensino</label>
    <input
      v-model="educacao.instituicao"
      id="instituicao"
      type="text"
      placeholder="Instituição"
    />

    <label for="ingresso">Data de ingresso</label>
    <input
      v-model="educacao.ingresso"
      id="ingresso"
      type="date"
      placeholder="Data de ingresso"
    />

    <label for="conclusao">Data de conclusão</label>
    <input
      v-model="educacao.conclusao"
      id="conclusao"
      type="date"
      placeholder="Data de conclusão"
    />

    <label for="nivelEscolaridade">Nível de escolaridade</label>
    <select v-model="educacao.nivelEscolaridade" id="nivelEscolaridade">
      <option value="Ensino Fundamental">Ensino Fundamental</option>
      <option value="Ensino Médio">Ensino Médio</option>
      <option value="Ensino Superior">Ensino Superior</option>
      <option value="Ensino Pós-graduação">Ensino Pós-graduação</option>
      <option value="Mestrado">Mestrado</option>
      <option value="Doutorado">Doutorado</option>
    </select>
    <button @click="adicionarEducacao" type="button">Adicionar</button>
    <button @click="formEducacao = false" type="button">Cancelar</button>
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
    educacao: {},
    formEducacao: false,
  }),
  methods: {
    adicionarEducacao() {
      this.perfil.educacao.push(this.educacao);
      this.educacao = {};
      this.formEducacao = false;
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
