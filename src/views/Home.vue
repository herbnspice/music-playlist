<template>
  <div class="home">
    <div v-if="document">
      <div v-for="playlist in document" :key="playlist.id">
          <div class="single">
            <div class="thumbnail">
                <img :src="playlist.coverUrl" alt="playlist">
            </div>

              <div class="info">
                <h3>{{ playlist.title}}</h3>
                <p> Created by: {{playlist.userName }}</p>
              </div>
              <div class="song-number">
                  <p>{{ playlist.songs.length}}</p>
              </div>
          </div>
      </div>
    </div>
    <div v-else>
        No playlist added
    </div>
    <div class="error" v-if="error"> Could not fetch data </div>
  </div>  
</template>
<style scoped>
  .single{
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    margin: 16px 0px;
    transition: all ease 0.2s;


  }
  .single:hover{
    box-shadow: 1px 2px 3px rgba( 50,50,50, 0.50);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }

  .thumbnail{
    max-width: 100px;
    min-width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 10px;
  }
  img{
    max-width: 150%;
    max-height: 150%;
    display: block;
  }

  .info{
    margin: 0 30px;
  }
  .song-number{
    margin-left: auto;
  }
</style>
<script>
// @ is an alias to /src
import getCollection  from '@/composables/getCollection'

export default {
  name: 'Home',
  setup(){
    const { document, error } = getCollection('playlist')

  console.log( document )
    return { document, error }
  }
}
</script>
