import Home from "./../pages/Home.vue";
import Perfil from "./../pages/Perfil.vue";
import Login from "./../pages/Login.vue";
import NovaConta from "../pages/NovaConta.vue";
import Notificacoes from "../pages/Notificacoes.vue";
import Notificacao from "../pages/Notificacao.vue";

export default [
  {
    path: "/home",
    component: Home,
    name: "Home",
    meta: { autenticacao: true },
  },
  {
    path: "/perfil",
    component: Perfil,
    name: "Perfil",
    meta: { autenticacao: true },
  },
  {
    path: "/nova-conta",
    component: NovaConta,
    name: "NovaConta",
    meta: { autenticacao: false },
  },
  { path: "/", component: Login, name: "Login", meta: { autenticacao: false } },
  {
    path: "/notificacoes",
    component: Notificacoes,
    name: "Notificacoes",
    meta: { autenticacao: true },
  },
  {
    path: "/notificacao/:id",
    component: Notificacao,
    name: "Notificacao",
    meta: { autenticacao: true },
  },
];
