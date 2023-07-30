import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '12b33b93a5e8489aac0607da95a0814c',
  },
})
