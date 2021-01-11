import axios from 'axios'

const baseURL = process.env.VUE_APP_API_URL

export default axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true
})
