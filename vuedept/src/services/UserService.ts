import Vue from 'vue'
import { RandomUser } from '../interfaces/RandomUser'

export default class UserService {
  getUsers (): Array<RandomUser> {
    const userList: Array<RandomUser> = []

    Vue.axios.get('https://randomuser.me/api/?results=15').then((response) => {
      for (const element of response.data.results) {
        const user: RandomUser = {
          pictureURL: element.picture.large,
          title: element.name.title,
          firstName: element.name.first,
          lastName: element.name.last,
          dateOfBirth: element.dob.date,
          placeOfResidence: element.location.country,
          email: element.email,
          phonenumber: element.phone
        }

        userList.push(user)
      }
    })

    return userList
  }
}
