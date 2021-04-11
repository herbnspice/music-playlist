<template>
    <form action="">
        <h3>Login</h3>
        <input type="email" placeholder="Email" v-model="email">
        <input type="placeholder" placeholder="Passoword" v-model="password">
        <button> Log in </button>
    </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
export default {
    setup() {
        const { error, login } = useLogin()
        const  email = ref('')
        const  password = ref('')

        login()

        return { email, password, error }
    },
}
</script>