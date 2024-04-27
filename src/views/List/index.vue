<script setup>
import { onMounted, ref } from 'vue'
import { getBookList } from '@/service/api.js'

const tableData = ref([])
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  getBookList().then(res => {
    tableData.value = res;
  }).finally(() => loading.value = false);
})

</script>

<template>
  <div class="container">
    <el-breadcrumb separator=">" class="breadcrumb">
      <el-breadcrumb-item to="/">HomePage</el-breadcrumb-item>
      <el-breadcrumb-item>
        List
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table v-loading="loading" :data="tableData" class="table" row-key="id">
      <el-table-column prop="title" label="Title" min-width="180" />
      <el-table-column prop="author" label="Author" min-width="180" />
      <el-table-column prop="year" label="Year" min-width="100" />
      <el-table-column prop="isbn" label="ISBN" min-width="250" />
    </el-table>
  </div>
</template>

<style scoped>
.container {
  padding: 0 20px;
  width: 100%;

  .breadcrumb {
    margin: 20px 0;
  }

  .table {
    width: 100%;
  }
}
</style>
