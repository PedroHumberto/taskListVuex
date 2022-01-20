export default {
    taskList: state => {
        let list = state.tasks.slice()
        return list.reverse()
    },
    searchTask: state => term => {
        let result = ''
        if(term != ''){
            result = state.tasks.filter(item => item.toLowerCase().includes(term.toLowerCase()))
        }
        return result
        
     
    }
}