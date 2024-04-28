<script setup>
import { computed, onMounted, ref } from 'vue'
import { get } from 'lodash'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { useRoute } from 'vue-router'
import { deleteBook, getBookDetail } from '@/service/api.js'
import router from '@/router/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'

const route = useRoute()
const bookId = computed(() => route.params.id)
const detail = ref({})

const handleEdit = () => {
  router.push({ name: 'edit', params: { id: bookId.value } })
}

const handleDelete = () => {
  ElMessageBox.confirm(
    'It will permanently delete the book. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  )
    .then(() => {
      deleteBook(bookId.value).then(() => {
        ElMessage({
          type: 'success',
          message: 'Delete completed'
        })
        router.push({ name: 'list' })
      })

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}

onMounted(() => {
  getBookDetail(bookId.value).then(res => {
    detail.value = res
  })
})

</script>

<template>
  <Breadcrumb current="Detail" />
  <div>
    <el-row :gutter="20">
      <el-col :span="2">Title:</el-col>
      <el-col :span="18">{{ get(detail, 'title') }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">Author:</el-col>
      <el-col :span="18">{{ get(detail, 'author') }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">Year:</el-col>
      <el-col :span="18">{{ get(detail, 'year') }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">ISBN:</el-col>
      <el-col :span="18">{{ get(detail, 'isbn') }}</el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="handleEdit()">
        Edit
      </el-button>
      <el-button
        type="danger"
        @click="handleDelete()"
      >
        Delete
      </el-button>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin: 10px 0;
}
</style>
