<template>
  <div>
    <div>
      <div class="items">
        <h1>{{ name }}</h1>
        <add-task></add-task>
        <search-bar></search-bar>
        <my-tasks></my-tasks>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from '../AddTask.vue';
import Tasks from '../Tasks.vue';
import Search from '../Search.vue';
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';


export default {

    components:{
    'my-tasks': Tasks,
    'add-task': AddTask,
    'search-bar': Search,
  },
  data () {
    return {

    }
  },
    computed: {
    ...mapState(['name']),
    ...mapGetters({
        tasks: 'taskList'
    })
  },


}
</script>

<style scoped>
  .items{
    display: flex;
    flex-direction: column;
    width: 500px;
  }

</style>