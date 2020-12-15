<template>
<div class='root'>
<div id="sjtb">

<div id="nr">
<div class='yuanhu'></div>
<div class='tubiao'>
 <div class='tubiao1'>

 <div class='tubiao-item'>
 <img src="../assets/tianmao.png" alt="">
 <p>天猫新品</p>
 </div>

  <div class='tubiao-item'>
 <img src="../assets/baokuan.png" alt="">
 <p>今日爆款</p>
 </div>

 <div class='tubiao-item'>
 <img src="../assets/xingqiu.png" alt="">
 <p>天猫国际</p>
 </div>



  <div class='tubiao-item super'>
 <img src="../assets/elma.png" alt="">
 <p>饿了么</p>
 </div>

  <div class='tubiao-item'>
 <img src="../assets/catche.png" alt="">
 <p>天猫超市</p>
 </div>

  

 </div>
 <div class='tubiao1'>
 <div class='tubiao-item super1'>
 <img src="../assets/chongzhi.png" alt="">
 <p>充值中心</p>
 </div>

  <div class='tubiao-item super1'>
 <img src="../assets/jiudian.png" alt="">
 <p>机票酒店</p>
 </div>


  <div class='tubiao-item super1'>
 <img src="../assets/jinbi.png" alt="">
 <p>金币庄园</p>
 </div>

  <div class='tubiao-item super1'>
 <img src="../assets/paimai.png" alt="">
 <p>拍卖</p>
 </div>

 <div class='tubiao-item super1'>
 <img src="../assets/chihuo.png" alt="">
 <p>淘宝吃货</p>
 </div>
 
 </div>
</div>
</div>
</div>
<div class='test1'>
<img src="https://img.alicdn.com/tfs/TB11VVdptTfau8jSZFwXXX1mVXa-190-140.gif" alt="">
<div id='pcsearch'>
<div class='se1'>
     <div class="choose">
     <p ref='babe' @click="fox2(1)" id="show">宝贝</p>
     <p ref='cat' @click='fox2(2)' class='cat' >天猫</p>
     <p ref='shop' @click="fox2(3)" class='shop'>店铺</p>
     </div></div>
    <div class="search">
  
    <input @focus="fox()" @blur="fox1()" ref='search'  placeholder="织围巾神奇 手摇摆" id='search1' type="text">
    <router-link class='send' to=""><p id='texts'>搜索</p></router-link>

    </div>
    <div id="daohang">
     <router-link to='' class='dh-1' >新款连衣裙</router-link>
     <router-link to='' class='dh-1' >四件套</router-link>
     <router-link to='' class='dh-1 show' >潮流T恤</router-link>
     <router-link to='' class='dh-1' >时尚女鞋</router-link>
     <router-link to='' class='dh-1' >短裤</router-link>
     <router-link to='' class='dh-1' >半身群</router-link>
     <router-link to='' class='dh-1' >男士外套</router-link>
     <router-link to='' class='dh-1' >墙纸</router-link>
     <router-link to='' class='dh-1' >行车记录仪</router-link>
     <router-link to='' class='dh-1' >新款男鞋</router-link>
     <router-link to='' class='dh-1' >耳机</router-link>
     <router-link to='' class='dh-1' >时尚女包</router-link>
     <router-link to='' class='dh-1' >沙发</router-link>
      
    </div>
    </div>

<div>
<div class='small'>
<p>去领红包</p>
<img   src="data:image/png;base64,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" alt="">
</div></div>
    </div>
    </div>
</template>

<style scoped>
@media screen and (max-width:767px){
  .test1{
    display: none;
  }
  .super img{
      width:25px  !important;
    height:25px !important;
     position: relative;
     top:3px;
    margin-bottom: 15px;
  }
   .super1 img{
      width:30px  !important;
    height:30px !important;
     position: relative;
     top:3px;
    margin-bottom: 15px;
  }
  .tubiao1{
    width:100%;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    bottom:12px;
    justify-content: space-around;
    
  }
 .tubiao-item p{
    font-size: small;
    color:rgb(110, 108, 108)
   }
  .tubiao-item img{
    width:40px;
      position: relative;
       bottom:7px;
    height:40px;
  }
  #nr{
    height: 92%;
    background-color: white;
  }
  .yuanhu{
    position: relative;
    bottom:8%;
    height:16%;
    background-color: white;
    border-radius: 50%;
  }
  #pcsearch{
    display: none;
   
  }
  #sjtb{
  
  height:200px;
  background: rgb(233, 229, 229);
  }

}
@media screen and (min-width:1200px){
  .test1{
        display: flex;
        height: 100%;
        align-items: center;
  justify-content: space-around;
flex-wrap: nowrap;
  }
  .small{
    width:80px;
    
    height:auto;
    border:1px solid rgba(214, 206, 206, 0.4)
  }
   .small img{
       padding: 9px;
         width:80px;
           margin-top:-10%;
   }
   .small p{
     color:rgb(247, 82, 6);
   
   }
  
  #sjtb{
    display: none;
  }
input::-ms-input-placeholder{position: relative; left:10%;}
input::-webkit-input-placeholder{position: relative; left:10% ;}
input::-moz-input-placeholder{position: relative; left:10%;}
.show{
  color:#ff5000   !important
}
#texts{
    
    vertical-align:middle;
    margin-top:9%;
    font-weight: bold;
    font-size: 16px;
    color:white
}

.se1{
  display: block;
  width: 100%;
  margin:0 auto;

  
}
#daohang{
  margin-right:8% ;
}
.send{ 
    height:40px ;
    text-align: center;
    display: block;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    width:15%;
   background-color: #FF4200;
}
.choose p{
    color:rgb(247, 86, 11);
    margin-right: 1%;
    padding-right: 7px;
        padding-left: 7px;
        padding-top:4px;
    border-top-left-radius: 10px;
       border-top-right-radius: 10px;
       font-weight: 600;
}
.choose p:hover{
    cursor:pointer
}
.dh-1{
  color:black;
  padding-right:0.4%;
  font-size: small;
  text-decoration: none;
}
.dh-1:hover{
  color:#ff5000 
}
p{
  margin: 0px;
}
#show{
background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
     color:white  !important
}
.choose{
  margin-left:3%  !important;
    display:flex;
    width: 50%;
 
    justify-content:left;
vertical-align: middle;
align-content: center;
font-size: 13px;
}
.cat:hover{
background-color:rgba(250, 162, 46,0.2)
}
.shop:hover{
background-color:rgba(250, 162, 46,0.2)
}
#search1{
    padding-left: 10px;
    background-image:url('../assets/search.png');
    background-position: 3%;
    background-size: 20px;
    margin-top: 0px  !important;
    background-repeat: no-repeat;
    margin-top:3% ;
    border-top-left-radius: 20px;
     border-bottom-left-radius: 20px;
     width: 650px;
     
     border-color: rgb(247, 86, 11);
     border-right: none;
     outline: none;
     height:40px  !important;
}  
  input{
    border-color:#FF4200  !important;
  }
.root{
   height: 200px; 
  vertical-align: middle;
  margin-top:3% ;
}
.search{
    display: flex;
    justify-content: center;
  margin:0 auto;
   height: auto;
}
}
</style>
<script>
import  '../assets/style/iconfont.css'
export default {
      name: 'Search',
  props:['tab'],
  methods: {
      fox(){ 
    this.$refs.search.style.backgroundImage='none'
    this.$refs.search.placeholder=''
      },
         fox1(){
              
    this.$refs.search.style.backgroundImage="url(../assets/search.png)"
    
   
    this.$refs.search.placeholder='织围巾神奇 手摇摆'
      },
        fox2(a){
         if(a==1){
             this.$refs.babe.id='show'
              this.$refs.cat.id=''
                 this.$refs.shop.id=''
         }
             if(a==2){
                     this.$refs.babe.id=''
             this.$refs.cat.id='show'
                  this.$refs.shop.id=''
         }
             if(a==3){
                       this.$refs.cat.id=''
                         this.$refs.babe.id=''
             this.$refs.shop.id='show'
         }
        }
  },
}
</script>