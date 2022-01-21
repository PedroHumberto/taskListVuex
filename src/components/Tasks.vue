<template>
    <div>
        <ul>
            <li v-for="task in tasks" :key="task">
                {{ task }} 
                <del-task :task='task'></del-task>
            </li>
            
        </ul>
    </div>
</template>

<script>
import DelTask from './DelTasks.vue'

export default {
    components: {
    'del-task': DelTask
    },
    data () {
        return {
        }
    },
    computed: {
        tasks(){
            return this.$store.getters.taskList
        }
    }
    
}
</script>

<style scope>
    *{
        text-align: center;
    }
    li{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        margin-top: 5px;
        width: 500px;
    }
    li:nth-child(even){
        background: rgb(241, 243, 252);
    }
</style>