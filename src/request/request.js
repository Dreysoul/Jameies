import axios from 'axios'
const intance = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net/app/v1_0'
})
intance.interceptors.request.use(
  config => {
    return config
  },
  // eslint-disable-next-line node/handle-callback-err
  error => {

  }
)
intance.interceptors.response.use(
  sucess => {
    return sucess.data
  },
  // eslint-disable-next-line node/handle-callback-err
  error => {

  }
)
export default intance
