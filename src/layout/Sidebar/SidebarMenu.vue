<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$router.path"
      text-color="#BFCBD9"
      unique-opened
      router
    >
      <sidebar-menu-item
        v-for="item in menuList"
        :key="item"
        :menuList="item"
      ></sidebar-menu-item>
      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>

      </el-sub-menu>-->
    </el-menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import SidebarMenuItem from './SidebarMenuItem'
const data = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    }
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
]

const menuList = reactive(data)
</script>

<style scoped lang="scss">
</style>
