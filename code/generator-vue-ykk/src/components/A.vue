<template>
  <div id="app">
    <C></C>
    <p class="text" @click="get_children"></p>
  </div>
</template>

<script>
import C from './components/C.vue'
export default {
  name: 'A',
  data(){
    return{
       msg:"阳阳"
    }
  },
  components: {
    C
  }
}
</script>

