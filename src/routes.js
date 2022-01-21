import Registers from './components/Contacts/Contacts.vue';
import Home from  './components/Home/Home.vue'

export const routes = [
    {path: '/', component: Home, title: 'Home'},
    {path: '/contacts', component: Registers, title: 'Contacts'}
]