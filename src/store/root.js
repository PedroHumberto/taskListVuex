import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import Tasks from './modules/tasks/root'
import Contacts from './modules/contacts/root'

Vue.use(Vuex)




export default new Vuex.Store({
    state,
    modules:{
        Tasks,
        Contacts
    }
})