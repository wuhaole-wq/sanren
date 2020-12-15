<template>
<div id='root'>
<div id='root2'>
<ul>
    <li>女装/内衣/家具</li>
    <li>女鞋/童鞋/箱包</li>
    <li>母婴/童装/玩具</li>
    <li>男装/运动户外</li>
    <li>美妆/彩妆/个护</li>
    <li>手机/数码/企业</li>
    <li>大家电/生活电器</li>
    <li>零食/生鲜/茶酒</li>
    <li>厨具/收纳/清洁</li>
    <li>家纺/家饰/鲜花</li>
    <li>图书音像/文具</li>
    <li>医药保健/进口</li>
    <li>汽车/二手车/用品</li>
    <li>房产/装修家具/建材</li>
    <li>手表/眼镜/珠宝饰品</li>
</ul>
<div id="root3">
<div ref='huadong' id="huadong">
<img class='img1' ref='img1' src='../assets/0bc73f4215VZEaw.jpg' alt="">
<img  ref='img2' src='../assets/06ac796de1CvSnr.jpg' alt="">
<img  ref='img3' src='../assets/00e818671eGeqv5.jpg' alt="">
</div>

</div>
</div>



</div> 

</template>
<style scoped>
#root2{
    display: flex;
}
#huadong{
    display: flex;
    flex-wrap: nowrap;
overflow: hidden;

}
.img1{
     transform:translateX();
}
#huadong img{
 width: 100%;
 transform:translateX(0%);
 transition-duration: 2s;
}
#root3{
    width: 55%;
    border:1px solid rgb(255, 102, 0)
}
#root{
    height: 600px;
   
    background-color: white;
    width:80%;
    margin:0 auto;
}

#root2>ul{
    float: left;
    width:20%;
    border:1px solid rgb(255, 102, 0);
    padding: 0px;
}
#root2>ul>li{
    text-align: center;
     padding-top:6px ;
     padding-bottom:6px ;
    width: 100%;
    list-style: none;
    color:#666
}
#root2>ul>li:hover{
    background-color:rgb(241, 129, 24) ;
}
</style>
<script>
export default {
    name:'Miannr',
    props:['tab'],
    methods:{
    
    },
  mounted(){
      this.$nextTick(()=>{
          let a=0
          let timer=setInterval(()=>{
           a=a+100
           if(a==300){
              
           this.$refs.huadong.children[0].style.transform=`translateX(-${-a-200}%)`
           this.$refs.huadong.children[1].style.transform=`translateX(-${-a-100}%)`
           this.$refs.huadong.children[0].style.transitionDuration=`0s`
           this.$refs.huadong.children[1].style.transitionDuration=`0s`
           this.$refs.huadong.children[2].style.transitionDuration=`0s`
               /*  var p = document.createElement("img")  
                  p.src='../assets/0bc73f4215VZEaw.jpg'
                  p.style=`transform:translateX(-${300+a}%)`
                  var p2 = document.createElement("img")  
                  p2.src='../assets/06ac796de1CvSnr.jpg'
                  p2.style=`transform:translateX(-${300+a}%)`
               this.$refs.huadong.appendChild(p)
               this.$refs.huadong.appendChild(p2)
               console.log(this.$refs.huadong)
               this.$refs.huadong.removeChild(  this.$refs.huadong.children[0])
             this.$refs.huadong.removeChild(  this.$refs.huadong.children[1])
            */
           }
           
           this.$refs.huadong.children[0].style.transform=`translateX(-${a}%)`
           this.$refs.huadong.children[1].style.transform=`translateX(-${a}%)`
           this.$refs.huadong.children[2].style.transform=`translateX(-${a}%)`
            this.$refs.huadong.children[0].style.transitionDuration=`2s`
           this.$refs.huadong.children[1].style.transitionDuration=`2s`
           this.$refs.huadong.children[2].style.transitionDuration=`2s`
          },4000)
      })
  }
    

}
</script>