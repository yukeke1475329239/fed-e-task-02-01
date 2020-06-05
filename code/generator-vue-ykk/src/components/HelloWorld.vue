<template>
  <div class="hello">
    <button @click="get_parent()"></button>
    <p>{{flag}}</p>
    <p>获取父组件的值为: {{parentVal}}</p>
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  props:['msg','text'],
  data(){
    return {
     flag:12
    }
  },
  computed:{
    parentVal(){
      console.log(typeof this.$parent)
      return this.$parent.msg;
    }
  },
  methods:{
    get_parent(){
      this.$emit("onEmitIndex",true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  display:inline-block;
  width:200px;
  height:100px;
  border:1px solid #ccc;
}
</style>
