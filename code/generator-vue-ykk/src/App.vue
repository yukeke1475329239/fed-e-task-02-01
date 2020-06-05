<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" text="1" @onEmitIndex="onEmitIndex"/> -->
    <B ref="comA" :name="name" :age="age" title="测试"></B>
    <p class="text" @click="get_children" ref = "text"></p>
  </div>
</template>

<script>
import B from './components/B.vue'
import { isArray } from 'util';

export default {
  name: 'app',
  provide: {
      for: "一片冰心在玉壶"
  },
  data(){
    return{
       msg:"阳阳",
       name:"岳阳楼记",
       age:24
    }
  },
  created(){
    //  this.$refs.myButton.innerText = this.message
  //  console.log(this.$refs.text.innerText=1234)
  },
  components: {
    B
  },
  mounted(){
    console.log(this.$refs.text.innerText=123234)
      const comA = this.$refs.comA;
      // console.log(comA.name);  // Vue.js
      // comA.sayHello();  // hello
  },
  methods:{
    onEmitIndex(val){
      console.log(val)
    },
    get_children(){
      this.$children[0].flag = 123456
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text{
  width:100px;
  height:100px;
  background:plum;
}
h1{
  color:red
}
</style>
