import { ref } from "@vue/reactivity";
import { projectAuth } from '../firebase/config'
const error = ref( null)
const isPending = ref ( false )
const login = async ( email, password ) => {
    error.value =  null
    isPending.value = true
    try{
        const response = await projectAuth.signInWithEmailAndPassword( email, password )
        error.value = null
        isPending.value = false
        if(!response){
            throw new Error ( 'Invalid login')
        }
        return response
    } catch( err){
        isPending.value = false
        error.value = err.message 
    }
}

const useLogin = () => {
    return { error, login, isPending }
}

export default useLogin