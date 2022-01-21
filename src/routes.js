import Registers from './components/Cadastro/Registers.vue';
import Home from  './components/Home/Home.vue'

export const routes = [
    {path: '/', component: Home, title: 'Home'},
    {path: '/register', component: Registers, title: 'Registers'}
]