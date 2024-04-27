import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 5000,
  withCredentials: true,
  responseType: 'json'
})

service.interceptors.response.use(
  async (response) => {
    const res = response.data
    if (response.status !== 200) {
      ElMessage({
        type: 'error',
        message: res.message || 'error',
        duration: 2000
      })
      return Promise.reject(new Error(res.message || 'error'))
    } else {
      return res
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default {
  /**
   * @param {String} url
   * @param {Object} data
   * @returns Promise
   */
  post (url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data,
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  get (url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params: data
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
