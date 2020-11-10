import axios from 'axios'
import cookie from 'js-cookie'

const instance = axios.create({
  baseURL: "https://gank.io/api"
  // baseURL:process.env.VUE_APP_API_URL
})

// 拦截器
instance.interceptors.request.use(function (config) {
  const token = cookie.get('loginToken')
  if (token) {
    config.headers.authorization = token
  }
  return config
}, function (error) {
  console.log(error)
})

//响应拦截器
instance.interceptors.response.use(function (response) {
  console.log("响应拦截")
  return response.data
},function (error){
  console.log("内容响应失败")
  return Promise.reject(error)
})
export default  instance
