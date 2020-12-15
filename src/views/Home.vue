<template>
  <div class="home">
    <HeadRouter tab='test'/>
    <GuangGao tab="ye" />
     <search class='test' tab="ye" />
     <Router tab='YE' />
       <Mainnr tab='YE'></Mainnr>
      
  </div>
</template>
<style  scoped>
@media screen and (min-width:1200px){
.home{
  overflow-x: hidden;
  background-color:rgb(247, 94, 23) ;
  height: 1000px;
}
.test{
  width: 80%;
  margin:0 auto;
  margin-top:30px;
  background-color:white;
}
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeadRouter from '../components/headRouter.vue'
import GuangGao from '../components/GuangGao.vue'
import Search from '../components/search.vue'
import Router from '../components/router.vue'
import Mainnr from '../components/mainnr.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,HeadRouter,GuangGao,Search,Router,Mainnr,
    
  }
}
</script>
