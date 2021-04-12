<template>
    <form @submit.prevent="handlSubmit">
        <h3>Signup</h3>
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <button v-if="!isPending" > Signup </button>
        <button  v-if="isPending" :disabled="isPending"> Loading </button>

    </form>
</template>

<script>
import userSignup from '@/composables/useSignup'
import { ref } from 'vue'
export default {
    setup() {
        const { error, signup, isPending } = userSignup()
        const  email = ref('')
        const  password = ref('')
        const  displayName= ref('')

        const handlSubmit = async (  ) =>{
            const res = await signup( email.value, password.value, displayName.value );
            if( !error.value ){
                console.log('user signup')
                console.log( res )
            }
        }
        return { email, password, error, handlSubmit, isPending, displayName } 
    },
}
</script>