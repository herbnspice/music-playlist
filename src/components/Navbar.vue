<template>
  <div class="navbar">
    <nav>
      <h1> <router-link to="/">Music Playlist</router-link> </h1> 
      <div class="links">
        <button @click="handlSubmit" v-if="user"> Logout</button>
        <router-link to="/login" class="btn"   v-if="!user" >Login</router-link>
        <router-link to="/signup" class="btn"  v-if="!user"> Signup </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
export default {
  setup(){

    const { error, logout } = useLogout()
    const router = useRouter()
    const { user } =  getUser() 

    console.log( user )
    const handlSubmit = async () => {
        await logout()
        if( !error.value){
            router.push( { name: 'Home'})
          
        }
    }
    return { error, handlSubmit, user}
  }
}
</script>

<style scoped>
 .navbar{
  background: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: #f1f1f1 0px 1px 10px 4px;
 }
  nav{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto
  }

  nav h1{
    margin-left: 20px;
  }

  nav .links{
    margin-left: auto;
  }

  nav .links a, button{
    margin-left: 16px;
    font-size: 14px;
  }
</style>

