import axios from 'axios'
axios.interceptors.request.use((config) => {
  return config
})
axios.interceptors.response.use(response => {
//   console.log(response)
  if (response.status === 200) {
    return response.data
  }
})
export default {
  getRun(id) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      params: {
        type: 'detail',
        id
      }
    })
  },
  comments(id) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      params: {
        type: 'comments',
        id
      }
    })
  }
}
