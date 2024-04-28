<script setup>
import { onMounted, ref } from 'vue'
import { getBookList } from '@/service/api.js'
import router from '@/router/index.js'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

const tableData = ref([])
const loading = ref(false)

onMounted(() => {
  loading.value = true
  getBookList().then(res => {
    tableData.value = res
  }).finally(() => loading.value = false)
})

const goToCreate = () => {
  router.push({ name: 'create' })
}

const goToDetail = (id) => {
  router.push({ name: 'detail', params: { id } })
}

const handleEdit = (id) => {
  router.push({ name: 'edit', params: { id } })
}

const handleDelete = (id) => {
  console.log(id)
}
</script>

<template>
  <Breadcrumb current="List" />
  <el-button type="primary" @click="goToCreate">Create Book</el-button>
  <el-table v-loading="loading" :data="tableData" class="table" row-key="id">
    <el-table-column prop="title" label="Title" min-width="180" />
    <el-table-column prop="author" label="Author" min-width="180" />
    <el-table-column prop="year" label="Year" min-width="100" />
    <el-table-column prop="isbn" label="ISBN" min-width="250" />
    <el-table-column label="Operations" min-width="200">
      <template #default="scope">
        <el-button size="small" @click="goToDetail(scope.row.id)">
          Detail
        </el-button>
        <el-button size="small" type="primary" @click="handleEdit(scope.row.id)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.id)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.table {
  width: 100%;
}
</style>
