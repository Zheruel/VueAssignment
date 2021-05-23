import Vue from 'vue'

export default class UserService {
  getUser (): void {
    Vue.axios.get('https://randomuser.me/api/').then((response) => {
      console.log(response.data.results)
    })
  }
}
