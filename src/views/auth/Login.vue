<template>
    <form @submit.prevent="handlSubmit">
        <h3>Login</h3>
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <button v-if="!isPending" > Log in </button>
        <button  v-if="isPending" :disabled="isPending"> Loading </button>

    </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
export default {
    setup() {
        const { error, login, isPending } = useLogin()
        const  email = ref('')
        const  password = ref('')

        const handlSubmit = async (  ) =>{
            const res = await login( email.value, password.value );
            if( !error.value ){
                console.log('user login')
                console.log( res )
            }
        }
        return { email, password, error, handlSubmit, isPending} 
    },
}
</script>