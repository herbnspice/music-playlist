<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create Playlist</h4>
      <input type="text" required placeholder="Playlist title" v-model="title">
      <textarea name="description" id="description" v-model="description" cols="30" rows="10"></textarea>
      <label for="image"> Upload playlist cover image</label>
      <input type="file" @change="handleChange">
      <div class="error"> {{ error }}</div>
      <div class="error"> {{fileError }}</div>
      <button > Create </button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useStorage  from '@/composables/useStorage'
export default {
    setup(){
        const description = ref('')
        const title = ref('')
        const error = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const { url, uploadImage } = useStorage()

        const handleChange = (e) => {
            const selectedFile  = e.target.files[0]
            const fileTypes= ['image/png', 'image/jpeg'] 
            if( selectedFile &&  fileTypes.includes(selectedFile.type) ){
                file.value = selectedFile
                fileError.value = null
            } else{
                file.value = null
                fileError.value = 'Please select an image file png or jpeg'
            }
        }
        const handleSubmit = async () => {
            if( file.value ) {
                await uploadImage(file.value )
                console.log( 'image uploaded', url.value )


            } else{
                fileError.value = 'Please select an image file png or jpeg'

            }
        }
        return { description , title, handleSubmit, error, handleChange, fileError}
    }
}
</script>

<style>

</style>s