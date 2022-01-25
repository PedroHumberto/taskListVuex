<template>
    <div>
        
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="contact in contacts" :key="contact.name"> 
                <td >
                    {{ contact.name }}
                </td>
                <td>
                    {{ contact.email }}
                </td>
                <del-contact :contact="contact"></del-contact>
            </tr>
        </table>
    </div>
</template>

<script>
import delContact from './DelContact.vue'
export default {

    components:{
        'del-contact': delContact
    },
    computed:{
        contacts(){
            return this.$store.getters.contactList;
        },

    },
}
</script>

<style scoped>
div{
    margin: 10px auto;
    
    
}

table {
  font-family: arial, sans-serif;

  width: 100%;
  
}

td, th {
    
    
    text-align: left;
    padding: 8px;
    
}

tr:nth-child(even) {
  background: rgb(241, 243, 252);
}

</style>