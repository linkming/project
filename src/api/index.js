import axios from 'axios'
axios.interceptors.request.use(config => {
  return config
})
export default {
  getbaidu () {
    return axios({
      url: '/api/rpc/2.0/kg/v1/cognitive/entity_annotation',
      method: 'post',
      data: {'data': '我 是 还不少'}
    })
  }
}
