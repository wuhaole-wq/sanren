<template>
  <div id="root">
    <router-link class="router1" to="">主题市场</router-link>
    <router-link class="router" to="">天猫</router-link>
    <router-link class="router" to="">聚划算</router-link>
    <router-link class="router" to="">天猫超市</router-link>
    <span>|</span>
    <router-link class="router" to="">淘抢购</router-link>
    <router-link class="router" to="">电器城</router-link>
    <router-link class="router" to="">司法拍卖</router-link>
    <router-link class="router" to="">淘宝心选</router-link>
      <span>|</span>
    <router-link class="router" to="">飞猪旅行</router-link>
    <router-link class="router" to="">智能生活</router-link>
    <router-link class='router' to=''>苏宁易购</router-link>
  </div>
</template>
<style scoped>
@media screen and (max-width:767px){
    #root{display:none}
    
}
@media screen and (min-width:1200px){
#root{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width:80%;
    
    height: 40px;
    margin:0 auto;
    align-items: center;
}
p {
  color: white;
}
span{
    color:white;
}
.router{
    display:block;
    width: 10%;
    text-decoration: none;
    color:white;
      line-height: 200%;
    height: 80%;

}
.router1{
   background-color: rgb(255, 52, 16) !important;
    display:block;
    line-height: 240%;
    width: 10%;
    text-decoration: none;
    color:white;
    height: 100%;

}
}
</style>
<script>
export default {
  name: "Router",
  props: ["tab"],
};
</script>
