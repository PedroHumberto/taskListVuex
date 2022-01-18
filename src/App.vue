<template>
  <div>
    <h1>{{ $store.state.nome }}</h1>
    <add-task></add-task>
    <my-tasks></my-tasks>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import Tasks from './components/Tasks.vue'
export default {
  name:'app',
  
  components:{
    'my-tasks': Tasks,
    'add-task': AddTask
  },
  data () {
    return {

    }
  },
  mounted(){
    setTimeout(() => {this.$store.state.nome = 'Segundo Nome'
    }, 1500 )
  },  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
