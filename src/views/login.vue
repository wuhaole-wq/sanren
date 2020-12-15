<template>
  <div class="body">
    <div id="login">
      <div class="howlogin">
        <p @click="fox(1)" ref='upwdlogin' class='show'>密码登录</p>
        <p @click="fox(2)" ref='msglogin'>短信登录</p>
      </div>
      <div class="table">
      <div class='lb'>
        <div ref='account' class="account">
          <span><i class="fa fa-user-circle" aria-hidden="true"></i></span
          ><input class="account-item" placeholder="请输入您的账号" type="text" />
        </div>
        <div ref='upwd' class="password">
          <span><i class="fa fa1 fa-lock" aria-hidden="true"></i></span
          ><input placeholder="请输入您的密码" type="password" class="password-item" />
        </div>
        </div>
        <button id="login1" @keypress="test($event)">登录</button>
        <div id="xiaobiao">
        <router-link class='rt-t' to=''>
        忘记密码
        </router-link>
             <router-link class='rt-t' to=''>
        忘记用户名
        </router-link>
             <router-link class='rt-t' to=''>
        免费注册
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width:440px){
.fa {
  color: rgb(250, 250, 250);
  font-size: 21.5px;
  background-color: gray;
  width: 40px;
  height: 40px;
  line-height: 190%;
}

.table {
  position: relative;
  top: 15%;
}
.fa1 {
  color: rgb(250, 242, 242);
  font-size: 23px;
}
.howlogin{
  display: flex;
  font-size: large;
  font-weight: 600;
  position: relative;
  top:5%;
  left:5%;
}.lb{
  position: relative;
  right:4%;
width:110%;
margin:0 auto;
}
.howlogin p{
  margin-right:3%;
}
.howlogin p:hover{
  cursor: pointer;
}
.show{
  border-bottom:2px solid black;
}
input {
  outline: none;
  border: 0px;

}
#xiaobiao{
  margin-right: 10%;
}
.rt-t{
  text-decoration: none;
  color:rgb(117, 107, 107) !important;
  font-size: 14px;
  margin-left: 1%;
  float: right;
  margin-top:8%;
  
}
#login {
  margin: 0 auto;
  width: 80%;
  background-color: rgb(212, 234, 243);
  height: 400px;
}
.account {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
   height: 40px;
  align-self: center;
}
#login1 {
  width: 70%;
  height: 40px;
  background-color: rgb(250, 79, 11);
  border-radius: 3px;
  border: 0px;
  color: white;
  font-size: large;
  margin-top: 20px;
}
input {
  width: 50%;
}
.password {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
}
}
@media screen and (min-width:440px){
.fa {
  color: rgb(250, 250, 250);
  font-size: 21.5px;
  background-color: gray;
  width: 40px;
  height: 40px;
  line-height: 190%;
}

.table {
  position: relative;
  top: 15%;
}
.fa1 {
  color: rgb(250, 242, 242);
  font-size: 23px;
}
.howlogin{
  display: flex;
  font-size: large;
  font-weight: 600;
  position: relative;
  top:5%;
  left:5%;
}
.howlogin p{
  margin-right:3%;
}
.howlogin p:hover{
  cursor: pointer;
}
.show{
  border-bottom:2px solid black;
}
input {
  outline: none;
  border: 0px;

}
#xiaobiao{
  margin-right: 10%;
}
.rt-t{
  text-decoration: none;
  color:rgb(117, 107, 107) !important;
  font-size: 14px;
  margin-left: 1%;
  float: right;
  margin-top:8%;
  
}
#login {
  margin: 0 auto;
  width: 440px;
  background-color: rgb(212, 234, 243);
  height: 400px;
}
.account {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
   height: 40px;
  align-self: center;
}
#login1 {
  width: 60%;
  height: 39px;
  background-color: rgb(250, 79, 11);
  border-radius: 3px;
  border: 0px;
  color: white;
  font-size: large;
  margin-top: 20px;
}
input {
  width: 50%;
}
.password {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
}
}
</style>

<script>
import Router from '../components/router.vue';
export default {
  name: "login",
  components: {},
  methods:{
    
    fox(a){
      if (a==2){
      this.$refs.upwdlogin.className=''
        this.$refs.msglogin.className='show'
        this.$refs.account.innerHTML=`<span><i class="fa fa-user-circle" aria-hidden="true"></i></span
          ><input class="account-item" placeholder="请输入您的手机号" type="text" />`
        
      }
       if (a==1){
      this.$refs.upwdlogin.className='show'
        this.$refs.msglogin.className=''

      }
    },

    test(e){
  
if (e.keyCode=='13'){
  alert('nice')
}

    }
  }
};
</script>
