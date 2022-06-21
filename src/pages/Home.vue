<template>
    <h1>Home</h1>
    <h2>Olá! {{ usuarioLogado.nome }}</h2>
</template>

<script>
import { mapState } from "pinia"
import { useUsuarioStore } from "../stores/usuarioStore"

export default {
    computed: {
        ...mapState(useUsuarioStore, ["usuarioLogado"])
    }
}
</script>






