export default{
    ADD_TASK: (state, value) => {
        state.tasks.push(value)
    },
    DEL_TASK: (state, value) => {
        let position = state.tasks.indexOf(value)
        if (position > -1) {
            state.tasks.splice(position, 1)
        }
    }
}