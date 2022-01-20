<template>
    <div>
        <label for="search">Search For</label>
        <input type="text" v-model="term">
        <ul>
            <li v-for="task in result(term)" :key="task">{{ task }}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    
    data () {
        return {
            term: ''
        }
    },
    computed: {

        ...mapGetters({
            result: 'searchTask'
        })
    },
}
</script>

<style>

</style>