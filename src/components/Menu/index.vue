<script setup>
import { List } from '@element-plus/icons-vue'
import router from '@/router/index.js'

const goToPage = (url) => {
  router.push(url);
}
</script>

<template>
  <el-menu
    default-active="0"
    class="menu"
  >
    <el-menu-item index="0" @click="goToPage('/list')">
      <el-icon>
        <List />
      </el-icon>
      <template #title>List</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.menu {
  height: 100vh;
}
</style>
