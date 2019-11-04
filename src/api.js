import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com'
})

export default {
  searchUser(username) {
    return instance
      .get(`users/${username}`)
      .then(result => result.data)
  }
}