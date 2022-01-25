<template>
    <div>
        <div class="items">
            <label for="search"></label>
            <input type="text" v-model="term" placeholder="Search For">
            <ul>
                <li v-for="task in result(term)" :key="task">{{ task }}</li>
                
            </ul>
        </div>
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

<style scoped>


input{
    margin: 10px auto;
}

.items{
    display: flex;
    flex-direction: column;
    width: 500px;
}

</style>