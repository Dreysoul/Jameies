
import request from '../request/request.js'
// 登录
export function loginApi (data) {
  return request({
    method: 'post',
    url: '/authorizations',
    data: data
  })
}
