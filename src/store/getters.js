export default {
    taskList: state => {
        let list = state.tasks.slice()
        return list.reverse()
    }
}