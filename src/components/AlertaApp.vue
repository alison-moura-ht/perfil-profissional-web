<template>
  <div
    class="alerta-app"
    :class="[{ erro: erro }, { info: info }]"
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
    ...mapState(useAlertaStore, ["exibir", "mensagem", "erro", "info"]),
  },
  methods: {
    ...mapActions(useAlertaStore, ["fechar"]),
  },
};
</script>
