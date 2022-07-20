import { createRouter, createWebHistory } from 'vue-router'
import routes from './../routes'
import { usePerfilStore } from '../stores/perfilStore'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const store = usePerfilStore()
    store.recuperarLogin()
    console.log("Usuário logado: " + store.usuarioLogado.nome)
    if(to.meta.autenticacao && !store.usuarioLogado.token) {
        router.push({ name: "Login" })
    }
})

export default router