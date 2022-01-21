<template>
    <div>
        <input type="text" v-model="task">
        <button @click="submitTask">Add</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            task: '',
        }
    },
    methods: {
        ...mapActions({
            add: 'addTask'
        }),
        submitTask(){
            if(this.task != ''){
                this.add(this.task)
            }
            this.task =''
        }
    },
}
</script>

<style>
</style>