<template>
  <div
    class="alerta-app"
    :class="[{ erro: erro }, { info: info }, { sucesso: sucesso }]"
    v-show="exibir"
  >
    <p>{{ mensagem }}</p>
    <button @click="fechar">Fechar</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useAlertaStore } from "../stores/alertaStore";

export default {
  computed: {
    ...mapState(useAlertaStore, [
      "exibir",
      "mensagem",
      "erro",
      "info",
      "sucesso",
    ]),
  },
  methods: {
    ...mapActions(useAlertaStore, ["fechar"]),
  },
};
</script>

<style scoped>
.alerta-app {
  background-color: #e0e0e0;
  padding: 5px 20px;
  border-radius: var(--border-radius);
  width: 80%;
  position: fixed;
  z-index: 10;
  left: 10%;
  top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.alerta-app button {
  background: transparent;
}

.alerta-app.erro {
  background-color: var(--cor-erro);
  color: white;
}

.alerta-app.info {
  background-color: var(--cor-info);
  color: white;
}

.alerta-app.sucesso {
  background-color: var(--cor-sucesso);
  color: #292929;
}
</style>
