export default {
    addTask(context, value){
        context.commit('ADD_TASK', value)
        
        
    },
    removeTask(context, value){
        context.commit('DEL_TASK', value)
    }
}