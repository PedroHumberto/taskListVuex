<template>
    <div>
        <label for="search">Search For</label>
        <input type="text" v-model="term">
        <ul>
            <li v-for="task in result" :key="task">{{ task }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
    data () {
        return {
            term: ''
        }
    },
    computed: {
        result(){
            return this.$store.getters.searchTask(this.term)
        }
    },
}
</script>

<style>

</style>