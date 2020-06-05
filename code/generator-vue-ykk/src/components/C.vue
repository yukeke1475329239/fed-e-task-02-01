<template>
  <div class="C">
    <p>age: {{ age}}</p>
    <p>childCom2: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    age: Number
  },
  created() {
    // console.log(this.$attrs); 
    // { "gender": "女", "height": "158", "title": "程序员成长指北" }
  }
}
</script>
<style scoped>

</style>
