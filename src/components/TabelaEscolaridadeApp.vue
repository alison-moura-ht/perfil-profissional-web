<template>
  <table>
    <thead>
      <th>Instituição</th>
      <th>Nível</th>
      <th>Ingresso</th>
      <th>Conclusão</th>
    </thead>
    <tbody>
      <tr v-for="item in educacao" :key="item.ingresso">
        <td>{{ item.instituicao }}</td>
        <td>{{ item.nivelEscolaridade }}</td>
        <td>{{ formatarData(item.ingresso) }}</td>
        <td>{{ formatarData(item.conclusao) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { formatarData } from '../utils/formatador';

export default {
  props: {
    educacao: {
      type: Array,
      require: true,
    },
  },
  methods: {
    formatarData(data) { 
      return formatarData(data)
    }
  }
};
</script>
