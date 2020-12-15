<template>
<div id='router'>
   <div id='sousuo'>
   <img class='icontaobao' src="../assets/taobao.png" alt="">
   <input class='input' type="text" placeholder="寻找宝贝店铺">
   </div>
<div id='router-left'>
<div class='test' @mousemove="tanchu"  @mouseout="xiaoshi">
<p style="position: relative;"  class=' router-link-active me'>中国大陆 
<img class='img1' src="../assets/down1.png" alt=""> 

</p>
<div  ref='area' id='area'>
    <p>全球</p>
    <p>中国大陆</p>
    <p>中国香港</p>
    <p>中国台湾</p>
    <p>中国澳门</p>
    <p>韩国</p>  
    <p>马来西亚</p>
    <p>澳大利亚</p>
    <p>新加坡</p>
    <p>新西兰</p>
    <p>加拿大</p>
    <p>美国</p>
    <p>日本</p>
    </div>
</div>

<router-link class='router-link-active login' to="/login">亲，请登录</router-link>
<router-link  class='router-link-active' to="/About">免费注册</router-link>
<router-link class='router-link-active' to="/About">手机逛淘宝</router-link> 
</div>
<div id='router-right'>
  <div class='test' @mousemove="tanchu1"  @mouseout="xiaoshi1">
    <p class='router-link-active me' >我的淘宝     <img class='img1' src="../assets/down1.png" alt=""></p> 
    <div  ref='area1' id='area1'>
    <p>已买到的宝贝</p>
    <p>我的足迹</p>
   
   
</div>
   </div>
 
    <p class='router-link-active me' ><img class='img3' src="../assets/gouwuche.png" alt="">购物车 <img class='img1 ' src="../assets/down1.png" alt=""></p>

   <div class='test' @mousemove="tanchu2"  @mouseout="xiaoshi2">
    <p  class='router-link-active me '> <img class='img2 ' src="../assets/shoucang.png" alt="">收藏夹    <img class='img1' src="../assets/down1.png" alt=""></p>
     <div  ref='area2' id='area2'>
    <p>收藏的的店铺</p>
    <p>收藏的宝贝</p>
   
     </div>
</div>
    <router-link class='router-link-active' to="/About">商品分类</router-link> 
    <router-link class='router-link-active' to="/About">免费开店</router-link> 
    <p style='color:silver'>|</p>
    
   <div class='test' @mousemove="tanchu3"  @mouseout="xiaoshi3">
    <p  class='router-link-active me'>千牛卖家中心    <img class='img1' src="../assets/down1.png" alt=""></p>
    <div  ref='area3' id='area3'>
     <p>免费开店</p> 
     <p>已卖出的宝贝</p>
    <p>已售中的宝贝</p>
    <p>卖家服务市场</p>
    <p>卖家培训中心</p>
    <p>体检中心</p>
   <p>问商友</p>
     </div>
   </div>
     <div class='test' @mousemove="tanchu4"  @mouseout="xiaoshi4">
    
    <p  class='router-link-active me'>联系客服    <img class='img1' src="../assets/down1.png" alt=""></p> 
     <div  ref='area4' id='area4'>
    <p>消费者客服</p>
    <p>卖家客服</p>
     </div>
     </div>
     <div class='test' @mousemove="tanchu5"  @mouseout="xiaoshi5">
    <p  class='router-link-active me'>网站导航    <img class='img1' src="../assets/down1.png" alt=""></p>
     <div  ref='area5' id='area5'>
  <div class='area5-item'>
  <p class="arear-zhuti-item">主题市场</p>
  <div class="arear-neirong-item">
  <ul>
    <li>女装</li>
    <li>男装</li>
    <li>内衣</li>
    <li>鞋靴</li>
    <li>箱包</li>
    <li>婴童</li>
    <li>家电</li>
    <li>数码</li>
    <li>手机</li>
    <li>美妆</li>
    <li>珠宝</li>
    <li>眼镜</li>
    <li>手表</li>
    <li>户外</li>
    <li>乐器</li>
    <li>游戏</li>
    <li>动漫</li>
    <li>影视</li>
    <li>美食</li>
    <li>鲜花</li>
    <li>宠物</li>
    <li>农资</li>
    <li>房产</li>
    <li>装修</li>
    <li>建材</li>
    <li>家居</li>
    <li>百货</li>
    <li>汽车</li>
    <li class="secar">二手车</li>
    <li>办公</li>
    <li>定制</li>
    <li>教育</li>
  
  
  </ul>
  <ul class="nofull">  <li class='kaquan'>卡券</li>
    <li class='local'>本地</li></ul>
  </div>
  </div>





  <div class='area5-item'>
  <p class="arear-tese-item">特色市场</p>
  <div class="arear-neirong-item1">
  <ul>
    <li>全球购</li>
    <li>集有家</li>
    <li>阿里拍卖</li>
    <li>淘宝众筹</li>
    <li>飞猪</li>
    <li>农资</li>
    <li>天天特卖</li>
    <li>Outlets</li>
    <li>淘抢购</li>
    <li>试用</li>
    <li>量贩团</li>
    <li>阿里翻译</li>
  
  </ul>
  
  </div>
  </div>
 <div class='area5-item'>
  <p class="arear-app-item">阿里APP</p>
  <div class="arear-neirong-item2">
  <ul>
    <li>淘宝</li>
    <li>天猫</li>
    <li>支付宝</li>
    <li>聚划算</li>
    <li>飞猪</li>
    <li>蚂蚁聚宝</li>
    <li>闲鱼</li>
    <li>淘小铺</li>
    <li>阿里钱盾</li>
    <li>钉钉</li>
    <li>高德地图</li>
    <li>虾米音乐</li>
    <li>淘票票</li>
    <li>菜鸟裹裹</li>
    <li>阿里云</li>
    <li> 网商银行</li>
    <li>阿里邮箱</li>
    <li>阿里众包</li>
  
  </ul>
  
  </div>
  </div>
  
  


  <div class='area5-item'>
  <p class="arear-tuijian-item">精彩推荐集</p>
  <div class="arear-neirong-item3">
  <ul>
    <li>余额宝</li>
    <li>大牌捡宝</li>
    <li>淘公仔</li>
    <li>浏览器</li>
    <li>淘宝香港</li>
    <li>淘宝台湾</li>
    <li>淘宝全球</li>
    <li>淘宝东南亚</li>
    <li>闺蜜淘货</li>
    <li>大众审评</li>
    <li>淘工作</li>
    <li>阿里巴巴认证</li>
  </ul>
  
  </div>
  </div>
     </div>
     </div>

</div>

</div>

</template>
<style scoped>
p{
  margin: 0px !important;
}
*{
    padding:0px;
    margin:0px;
}
@media screen {
  
}
@media screen and (max-width:767px){



   input::-ms-input-placeholder{position: relative; left:40%;}
input::-webkit-input-placeholder{position: relative; left:40% ;color:rgb(230, 223, 223);}
input::-moz-input-placeholder{position: relative; left:40%;}
 .icontaobao{
   width:30px ;
   height: 30px;
 }
  .input{
    border-color:rgb(255, 118, 55);
    border-radius: 5px; 
    background-color: orangered;
    border:1px;
      background-image:url('../assets/search1.png');
    background-position: 36%;
    background-size: 15px;
        background-repeat: no-repeat;
    height:70% ;
    width:90% ;
     }

  #sousuo{
    height:35px;
    align-items: center;
    background-color:rgb(245, 102, 50) ;
    display: flex;
    justify-content:space-around;
  }
#router-left{
display:none
}
#router-right{
display:none
}
}
@media screen and (min-width:768px ) and (max-width:991px){}
@media screen and (min-width:992px) and (max-width:1199px){}
@media screen and (min-width:1200px){

html, body {
  height: 100%;
}
#sousuo{
    display: none;
  }
.nofull{
  margin-left:1.8% ;
  width: 100%;
  display: flex !important;
  justify-content: left !important;
}
.arear-neirong-item {
  margin: 0 auto;

  width: 98%;
}
.arear-neirong-item1 {
  margin: 0 auto;
  width: 98%;
}
.arear-neirong-item2 {
  margin: 0 auto;
  width: 98%;
}
.arear-neirong-item3 {
  margin: 0 auto;
  width: 98%;
}
.secar{
  margin-right: 4.5%  !important;
}
.arear-neirong-item ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.arear-neirong-item1 ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.arear-neirong-item2 ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.arear-neirong-item3 ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.kaquan{
justify-self: flex-start;
float:left;
}
.local{
  margin-left: 5.4%  !important;
justify-self: flex-start;
}
.arear-neirong-item li{
  list-style: none;
   margin:1%;
   margin-right: 8%;
   padding: 4px;
      padding-right: 8px;
    padding-left: 8px;
}
.arear-neirong-item1 li{
  list-style: none;
    text-align: left  !important;
    margin-right:6% ;
    margin-bottom:4%; 
    margin-top:2% ;
   padding: 4px;
      padding-right: 8px;
    padding-left: 8px;
}
.arear-neirong-item1 li:hover{
background-color:#9fb838;
  cursor:pointer;
  color:white;
  border-radius: 2px;
}

.arear-neirong-item2 li{
  list-style: none;
    text-align:center!important;
    margin-right:14%;
    margin-bottom:4%; 
    margin-top:2% ;
   padding: 4px;
      padding-right: 8px;
    padding-left: 8px;
}
.arear-neirong-item2 li:hover{
background-color:#d75696;
  cursor:pointer;
  color:white;
  border-radius: 2px;
}

.arear-neirong-item3 li{
  list-style: none;
    text-align:center!important;
    margin-right:19%;
    margin-bottom:4%; 
    margin-top:2% ;
   padding: 4px;
      padding-right: 8px;
    padding-left: 8px;
}
.arear-neirong-item3 li:hover{
background-color:#2e9fdb;
  cursor:pointer;
  color:white;
  border-radius: 2px;
}
.arear-neirong-item li:hover{
background-color:rgb(245, 93, 47) ;
  cursor:pointer;
  color:white;
  border-radius: 2px;
}
#area{
    display: none;
    position:absolute;
    top:2.7%;
    left:12.7%;
    background-color: white;
    height: 300px;
    width:250px ;
    overflow:scroll;
}
#area2{
    display: none;
    position:absolute;
    top:2.7%;
    left:61.1%;
    background-color: white;
    padding-top: 16px;
  text-align:left;
    
}
.arear-app-item{
    color:#d75696;
    font-size: 16px  !important;
    font-weight: 600;
}
.arear-tuijian-item{
    color:#2e9fdb;
    font-size: 16px  !important;
    font-weight: 600;
}
ul{
  overflow: hidden;
}
  .arear-zhuti-item{
    color:rgb(223, 69, 22);
    font-size: 16px  !important;
  overflow: hidden;
    font-weight: 600;
  }
   .arear-tese-item{
    color:#9fb838;
    font-size: 16px  !important;
    font-weight: 600;
  }
.area5-item{
  border-right:1px solid rgb(238, 235, 235);
  width: 25%;
  overflow: hidden;
  height:100%
}
#area2 p{
    padding:7px;
    text-align: left;
    font-size: 10px;
}
#area2 p:hover{
    cursor:pointer;
    background-color: rgb(192, 185, 185);
}




#area3{
    display: none;
    position:absolute;
    top:2.7%;
    left:74.1%;
    background-color: white;
    padding-top: 16px;
  text-align:left;
    
}
#area3 p{
    padding:7px;
    text-align: left;
     
    font-size: 10px;
}
#area3 p:hover{
    cursor:pointer;
    background-color: rgb(192, 185, 185);
}


#area4{
    display: none;
    position:absolute;
    top:2.7%;
    left:79.7%;
    background-color: white;
    padding-top: 16px;
  text-align:left;
    
}
#area4 p{
    padding:7px;
    text-align: left;
     
    font-size: 10px;
}
#area4 p:hover{
    cursor:pointer;
    background-color: rgb(192, 185, 185);
}


#area5{
    display: none;
    position:absolute;
    z-index: 10;
    top:2.7%;
    left:12.7%;
    background-color: white;
    padding-top: 16px;
  text-align:left;
  width:74.2%;
  height: 40%;
  border :1px solid rgb(248, 244, 244)
    
}
#area5 p{
    padding:7px;
    text-align: left;
     
    font-size: 10px;
}


#area1{
    display: none;
    position:absolute;
    top:2.7%;
    left:52.0%;
    background-color: white;
    padding-top: 16px;
  text-align:left;
    
}
#area1 p{
    padding:7px;
    text-align: left;
     
    font-size: 10px;
}
#area1 p:hover{
    cursor:pointer;
    background-color: rgb(192, 185, 185);
}
#area p{
    padding:10px;
    text-align: left;
     
    font-size: small;
}

#area p:hover{
    cursor:pointer;
    background-color: rgb(192, 185, 185);
}
.img1{
    align-self:center;
    width:8px;
    margin-bottom:0%;
    height:4px;
}
.xia{
    position: relative;
    top:2px;
}
.show{
    display: block !important;
    height: 100%;
}
.show:hover{
    background-color: white
}
.juli{
    padding-right: 2px;
    padding-left: 2px;
}
.img2{
    align-self:center;
    width:10px;
    height:10px;
    margin-bottom: 2%;
}
.test{
    display: flex;
    align-items: center;
height:100%;
}
.test:hover{
    background-color: white;
}
.img3{
    align-self:center;
    width:15px;
    height:15px;
    margin-bottom:1% ;
}
.me:hover{
    cursor:pointer;
}
#router{
height:30px;
background-color:rgb(248, 244, 244);
display:flex;
flex-wrap: nowrap;
justify-content:space-around
}
#router-left{
    height: 100%;
width:14%;
flex-wrap: nowrap;
align-items: center;
font-size:12px ;
display:flex;
justify-content:space-around
}
#router-right{
 align-items: center;
width:36%;
font-size:12px ;
display:flex;
justify-content:space-around
}
.login{
    color:red !important;
}
.router-link-active {
    color:rgb(56, 52, 52);
    text-decoration: none;
    display: flex;
    flex-wrap: n;
  }
  .router-link-active:hover {
    color:red;
  }
  }
</style>
<script>
export default {
  name: 'HeadRouter',
  props:['tab'],
  methods: {
      tanchu(){
   this.$refs.area.style.display='block'
      },
       xiaoshi(){
this.$refs.area.style.display='none'
      },
      tanchu1(){
        this.$refs.area1.style.display='block'
      },
       xiaoshi1(){
         this.$refs.area1.style.display='none'
      },
      tanchu2(){
        this.$refs.area2.style.display='block'
      },
       xiaoshi2(){
         this.$refs.area2.style.display='none'
      },
          tanchu3(){
        this.$refs.area3.style.display='block'
      },
       xiaoshi3(){
         this.$refs.area3.style.display='none'
      },
          tanchu4(){
        this.$refs.area4.style.display='block'
      },
       xiaoshi4(){
         this.$refs.area4.style.display='none'
      },
           tanchu5(){
        this.$refs.area5.style.display='flex'
      },
       xiaoshi5(){
         this.$refs.area5.style.display='none'
      },
 },

 }

</script>