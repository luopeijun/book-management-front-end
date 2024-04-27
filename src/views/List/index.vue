<script setup>
import { ref } from 'vue'

const tableData = ref([{
  id: 1,
  title: '123',
  author: '123',


}])

</script>

<template>
  <div class="container">
    <el-breadcrumb separator=">" class="breadcrumb">
      <el-breadcrumb-item to="/">HomePage</el-breadcrumb-item>
      <el-breadcrumb-item>
        List
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" class="table" row-key="id">
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
