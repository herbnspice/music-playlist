import { ref } from "@vue/reactivity"
import { projectAuth } from "../firebase/config"

const error = ref(null)
const isPending = ref ( false )

const signup = async( email, password, displayName ) => {

    error.value = null
    isPending.value= true
    try{
        const response = await projectAuth.createUserWithEmailAndPassword( email, password )
        if(!response){
            throw new Error("Could not complete signup")
        }
        isPending.value= false
        await response.user.updateProfile( {displayName} )
        error.value =  null
        return response
    }  
    catch( err ){ 
        error.value =  err.message  
        isPending.value= false

        console.log( error )
    }
    return{ email, password, displayName  }  
}

const useSignup = () => {

    return {  error, signup , isPending }
}

export default useSignup