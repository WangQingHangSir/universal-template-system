<template>
  <div>
    <div class="header">
      <h3>imooc-admin</h3>
      <sidebar-menu></sidebar-menu>
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
}
</style>
