import Home from "./../pages/Home.vue";
import Perfil from "./../pages/Perfil.vue";
import Login from "./../pages/Login.vue";
import NovaConta from "../pages/NovaConta.vue";
import Notificacoes from "../pages/Notificacoes.vue";
import Notificacao from "../pages/Notificacao.vue";

export default [
  { path: "/home", component: Home, name: "Home" },
  { path: "/perfil", component: Perfil, name: "Perfil" },
  { path: "/nova-conta", component: NovaConta, name: "NovaConta" },
  { path: "/", component: Login, name: "Login" },
  { path: "/notificacoes", component: Notificacoes, name: "Notificacoes" },
  { path: "/notificacao/:id", component: Notificacao, name: "Notificacao" },
];
