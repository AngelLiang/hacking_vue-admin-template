import request from '@/utils/request'

const usersApi = {
  pathUrl: '/users',

  getList(params) {
    return request({
      url: this.pathUrl,
      method: 'get',
      params
    })
  },

  create(data) {
    return request({
      url: this.pathUrl,
      method: 'post',
      data: data
    })
  },

  getDetail(id, params) {
    return request({
      url: this.pathUrl + '/' + id,
      method: 'get',
      params
    })
  },

  update(id, data) {
    return request({
      url: this.pathUrl + '/' + id,
      method: 'put',
      data: data
    })
  },

  delete(id) {
    return request({
      url: this.pathUrl + '/' + id,
      method: 'delete'
    })
  },

  getInfo(token) {
    return request({
      // url: this.pathUrl + '/info,
      url: '/user/info',
      method: 'get',
      params: { token }
    })
  }
}

export default usersApi
