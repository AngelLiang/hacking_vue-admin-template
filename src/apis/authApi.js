import request from '@/utils/request'

const authApi = {
  login(username, password) {
    return request({
      url: '/user/login',
      // url: '/users/token',
      method: 'post',
      data: {
        username,
        password
      }
    })
  },

  logout() {
    return request({
      url: '/users/token',
      method: 'delete'
    })
  }
}

export default authApi
