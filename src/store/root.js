import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import Tasks from './modules/tasks/root'

Vue.use(Vuex)




export default new Vuex.Store({
    state,
    modules:{
        Tasks
    }
})