<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu/index.vue'
</script>

<template>
  <el-container>
    <el-aside class="aside">
      <Menu />
    </el-aside>
    <el-container>
      <RouterView />
    </el-container>
  </el-container>

</template>

<style scoped>
.aside {
  width: 200px;
}
</style>
