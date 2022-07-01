<template>
  <div class="navbar">
    <div class="navbar-left">left</div>
    <div class="navbar-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="avatarUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item divided command="logout"
              >退出按钮</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handleToHome = () => {
  router.push('/')
  console.log('home')
}

const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
  console.log('out')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  line-height: 50px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.navbar-left {
  float: left;
}
.navbar-right {
  float: right;
  margin-top: 5px;
}
</style>
