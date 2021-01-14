<template>
  <div class="hello">
    <h1 class="h1">你好</h1>
  </div>
</template>

<script>
import {errorLog} from '../api'
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      errorLog('info','测试').then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
    .h1{
      color: red;
    }
  }
</style>
