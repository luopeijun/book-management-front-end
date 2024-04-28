<script setup>
defineProps({
  current: String
})
</script>

<template>
  <el-breadcrumb separator=">" class="breadcrumb">
    <el-breadcrumb-item to="/">Book Management</el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ current }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <el-divider />
</template>

<style scoped>
.breadcrumb {
  margin: 20px 0;
}
</style>
