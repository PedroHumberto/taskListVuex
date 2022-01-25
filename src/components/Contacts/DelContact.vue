<template>
  <div>
      <button @click="delet(contact)">Delete</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        contact:{
            required: true,
            type: Object
        }
    },
    methods: {
        ...mapActions({
            delet: 'delContact'
        })
    },
}

</script>

<style>

</style>