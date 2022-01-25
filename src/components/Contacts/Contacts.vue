<template>
    <div>
        <h1>Add Contact</h1>
        <add-contact></add-contact>
        <contact-data></contact-data>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddContact from './AddContact.vue'
import ContactData from './ContactData.vue'

export default {
    components:{
        'add-contact': AddContact,
        'contact-data': ContactData
    },

    data() {
        return {
            contact: [],
            filter: '',
        }
    },
    methods: {
        ...mapActions({
            add: 'addContact'
        }),
        submitContact(){
            if(this.contact != ''){
                this.add(this.contact)
            }
            this.contact = ''
        }
    },
}
</script>

<style>

</style>