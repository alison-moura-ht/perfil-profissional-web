import Home from './../pages/Home.vue'
import Perfil from './../pages/Perfil.vue'
import Login from "./../pages/Login.vue"

export default [
    { path: '/home', component: Home },
    { path: '/perfil', component: Perfil },
    { path: "/", component: Login }
]