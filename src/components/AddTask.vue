<template>
    <div>
        <input type="text" v-model="task">
        <button @click="add">Add</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            task: '',
        }
    },
    methods: {
        add(){
            if(this.task != ''){
                this.$store.dispatch('addTask', this.task)
            }
            this.task =''
        }
    },
}
</script>

<style>

</style>