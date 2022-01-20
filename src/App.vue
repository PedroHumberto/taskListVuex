<template>


  <div>
    <div class="container">
      <div class="items">
        <h1>{{ name }}</h1>
        <add-task></add-task>
        <my-tasks></my-tasks>
        <search-bar></search-bar>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';
import Tasks from './components/Tasks.vue';
import Search from './components/Search.vue';
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

  *{
    padding: 0;
    margin: 0;
  }
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 10px solid blue;
    margin: 15px auto;
    height: 500px;
  }
  .items{
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    height: 500px;
  }
  ul, li{
    list-style: disc;
  }
</style>
