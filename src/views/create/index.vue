<script setup>
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { computed, onMounted, ref } from 'vue'
import { createBook, getBookDetail, updateBookDetail } from '@/service/api.js'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'
import { useRoute } from 'vue-router'
import { isEmpty, get } from 'lodash'

const form = ref({})
const formRef = ref()
const loading = ref(false)

const route = useRoute()
const bookId = computed(() => route.params.id)

const pageType = computed(() => bookId.value ? 'Edit' : 'Create')

const rules = {
  title: [{ required: true, message: 'Please input Book Title', trigger: 'blur' }],
  author: [{ required: true, message: 'Please input Book Author', trigger: 'blur' }]
}

onMounted(() => {
  if (isEmpty(bookId.value)) {
    return
  }
  getBookDetail(bookId.value).then(res => {
    form.value = {
      id: get(res, 'id'),
      title: get(res, 'title'),
      author: get(res, 'author'),
      year: get(res, 'year') ? res.year.toString() : undefined,
      isbn: get(res, 'isbn')
    }
  })
})


const onSubmit = () => {
  formRef.value.validate((valid) => {
    const api = pageType.value === 'Edit' ? updateBookDetail : createBook
    if (valid) {
      loading.value = true
      api(form.value)
        .then(() => {
          ElMessage({
            message: `${pageType.value} Success`,
            type: 'success'
          })
          router.push({ name: 'list' })
        })
        .finally(() => loading.value = false)
    }
  })
}

const onCancel = () => {
  router.back()
}

</script>

<template>
  <Breadcrumb :current="pageType" />
  <el-form v-loading="loading" :model="form" label-width="auto" class="form" :rules="rules" ref="formRef">
    <el-form-item label="Book Title" required prop="title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Book Author" prop="author" required>
      <el-input v-model="form.author" />
    </el-form-item>
    <el-form-item label="Book Year" prop="year">
      <el-date-picker
        v-model="form.year"
        placeholder="Pick a year"
        type="year"
        value-format="YYYY"
      />
    </el-form-item>
    <el-form-item label="Book ISBN" prop="isbn">
      <el-input v-model="form.isbn" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Confirm</el-button>
      <el-button @click="onCancel">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.form {
  max-width: 600px;
}
</style>
