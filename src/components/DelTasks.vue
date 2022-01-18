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
            this.$store.commit('DEL_TASK', this.task)
        }
    },
}
</script>

<style>

</style>