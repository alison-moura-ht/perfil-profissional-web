<script setup></script>

<template>
  <alerta-app></alerta-app>
  <loading-app></loading-app>
  <navbar-app></navbar-app>
  <router-view></router-view>
</template>
<script>
import NavbarApp from "./components/NavbarApp.vue";
import LoadingApp from "./components/LoadingApp.vue";

export default {
  components: { NavbarApp, LoadingApp },
};
</script>
