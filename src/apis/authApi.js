import request from '@/utils/request'

const authApi = {
  pathUrl: '/user',
  login(username, password) {
    return request({
      url: this.pathUrl + '/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  },

  logout() {
    return request({
      url: this.pathUrl + '/logout',
      method: 'post'
    })
  }
}

export default authApi
