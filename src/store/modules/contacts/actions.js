export default{
    addContact(context,value){
        context.commit('ADD_CONTACT', value)
    },
    delContact(context, value){
        context.commit('DEL_CONTACT', value)
    }
}