<script setup>

</script>

<template>
    <!-- <div>
        <p>정복한 산</p>
        
    </div> -->
<div class="head">

    <p>산들바람</p>

    <router-link to="">정복한 산  </router-link> 
    <router-link to="">랭킹</router-link>   
    <router-link to="">기록</router-link>   
     

     <router-link to="" class="btn">로그인</router-link>    
    <router-link to="" class="btn">회원가입</router-link>  



</div>

</template>

<style scoped>

router-link{
    margin-left: 11px;
}
.head{
    margin-left: 333px;
    color: aquamarine;
 }
.btn {

  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 19px;
}

</style>