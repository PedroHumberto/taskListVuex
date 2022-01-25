export default{

    /*O value é o dado que é colocado dentro do campo ou seja, nome e email.
    o state é o objeto
    */
    ADD_CONTACT: (state, value) =>{
        state.contacts.push(value)
    },
    DEL_CONTACT: (state, value) =>{
        let position = state.contacts.indexOf(value)
        if (position > -1){
            state.contacts.splice(position, 1)
        }
    }
}