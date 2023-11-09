<script setup>

</script>

<template>
  <div class="head">
    <p class="logo">산들바람</p>
    <nav>
      <router-link to="/conqueredmountain">  정복한 산</router-link>
      <router-link to="/rank">랭킹</router-link>
      <router-link to="/board">게시판</router-link>


    </nav>

    <div class="auth-buttons">
      <router-link to="/login" class="btn">로그인</router-link>
      <router-link to="/register" class="btn">회원가입</router-link>
    </div>
  </div>
</template>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 20px;
}

router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
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
