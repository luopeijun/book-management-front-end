import request from '@/service/request.js'

export const getBookList = (params) => {
  return request.get('/api/books', params)
}

export const createBook = (data) => {
  return request.post('/api/books', data)
}

export const getBookDetail = (id) => {
  return request.get(`/api/books/${id}`)
}

export const updateBookDetail = (data) => {
  return request.put(`/api/books/${data.id}`, data)
}
