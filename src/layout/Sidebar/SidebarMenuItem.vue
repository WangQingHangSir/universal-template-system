<template>
  <div>
    <template v-if="props.menuList && !props.menuList.children">
      <el-menu-item :index="props.menuList.path">
        <el-icon>
          <svg-icon :icon="props.menuList.meta.icon"></svg-icon>
        </el-icon>
        {{ props.menuList.meta.title }}
      </el-menu-item>
    </template>
    <template v-if="props.menuList && props.menuList.children && props.menuList.children.length > 0">
      <el-sub-menu :index="props.menuList.path">
        <template #title>
          <el-icon>
            <svg-icon :icon="props.menuList.meta.icon"></svg-icon>
          </el-icon>
          <span>{{ props.menuList.meta.title }}</span>
        </template>
        <sidebar-menu-item
          v-for="itemChild in props.menuList.children"
          :key="itemChild"
          :menuList="itemChild"
        >
        </sidebar-menu-item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped lang="scss"></style>
