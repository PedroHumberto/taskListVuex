<template>
    <div>
        <button @click="delet(task)">Remove</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
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
        ...mapActions({
            delet: 'removeTask'
        })
    },
}
</script>

<style scoped>
div{
    margin-bottom: 5px;
}
</style>