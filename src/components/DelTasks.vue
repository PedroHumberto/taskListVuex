<template>
    <div>
        <button @click="delet()">Del</button>
    </div>
</template>

<script>
export default {
    props:{
        task:{
            required: true,
            type: String
        }
    },
    data () {
        return {
        }
    },
    methods: {
        delet(){
            this.$store.dispatch('removeTask', this.task)
        }
    },
}
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>