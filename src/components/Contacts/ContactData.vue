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
            </tr>
        </table>
    </div>
</template>

<script>

export default {

    components:{

    },

    computed:{
        contacts(){
            return this.$store.getters.contactList;
        }
    }
}
</script>

<style scoped>
div{
    border: 2px solid blue;
    margin: 10px auto;
    
    
}

table {
  font-family: arial, sans-serif;
  border: 2px solid blue;
  width: 100%;
  
}

td, th {
    
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>