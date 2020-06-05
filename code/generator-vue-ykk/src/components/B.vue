<template>
  <div class="B">
    <h1>于可可</h1>
      <!-- {{a}}
     <p>childCom1的$attrs: {{ $attrs }}</p> -->
    <c v-bind="$attrs"></c>
  </div>
</template>
<script>
import C from './C.vue'

export default {
  name: 'B',
//   inject: ['for'],
  inheritAttrs:false,
  data(){
    return {
     mag:"B组件",
     a:this.for,
     name: '男神'
    }
  },
  created(){
    // console.log(this.$attrs);
  },
  components:{
      C
  },
  methods:{
    sayHello () {
      console.log('hello')
    }
  }
}
</script>
<style scoped>

</style>
