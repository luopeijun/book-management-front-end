import request from '@/service/request.js'
export const getBookList = (params) => {
  return request.get("/api/books", params)
}
