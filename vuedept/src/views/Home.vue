<template>
  <div id="home">
    <div id="userBoxList">
      <UserBox class="userBox" v-for="(user, index) in userList" :key="index" :user="user"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RandomUser } from '../interfaces/RandomUser'
import UserService from '../services/UserService'
import UserBox from '@/components/UserBox.vue' // @ is an alias to /src

@Component({
  components: {
    UserBox
  }
})

export default class Home extends Vue {
  userList: Array<RandomUser> = []

  created (): void {
    const userService = new UserService()
    this.userList = userService.getUsers()

    console.log(this.userList)
  }
}
</script>

<style scoped lang="scss">
#userBoxList {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
