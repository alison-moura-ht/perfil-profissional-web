<template>
    <div class="background" v-show="exibir">
        <div class="loading">
            <span>Por favor aguarde...</span>
        </div>
    </div>
</template> 
<script>
import { mapState } from "pinia";
import { useLoadingStore } from "../stores/loadingStore";

export default {
    computed: {
        ...mapState(useLoadingStore, ["exibir"])
    }
}
</script>
<style scoped>
.background {
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.loading {
    background-color: var(--cor-primaria);
    color: var(--cor-contraste);
    width: 300px;
    padding: 20px;
    border-radius: var(--border-radius)
}
</style>