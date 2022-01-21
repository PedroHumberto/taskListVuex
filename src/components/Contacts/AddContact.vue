<template>
    <div>
        <label for="email">Email</label>
        <input type="text" v-model="contact.name"/>
        <input type="email" v-model="contact.email"/>
        <button @click="submitContact">Add</button>      
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

    data() {
        return {
            contact: {
                name: '',
                email:''
            },
            email: '',
        }
    },
    methods: {
        ...mapActions({
            add: 'addContact'
        }),
        submitContact(){
            if(this.contact.name != '' && this.contact.email){
                    if (!this.contact) { /*Email Validation*/
                        this.errors.push('O e-mail é obrigatório.');
                    }   
                    else if (!this.validEmail(this.contact.email)) {
                        this.errors.push('Utilize um e-mail válido.');
                    }
                    this.add({name: this.contact.name, email: this.contact.email})
                }
            this.contact.name = ''
            this.contact.email = ''
        },

        /*teste the email*/
        validEmail: function (contact) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(contact);
        }
    },
}
</script>

<style>

</style>