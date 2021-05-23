<template>
  <div id="home">
    <div id="userBoxList">
      <UserBox v-for="(user, index) in userList" :key="index" :user="user" @click.native="routeToItem(index)" />
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
    if (this.$store.state.userList.length === 0) {
      const userService = new UserService()
      this.userList = userService.getUsers()

      this.$store.commit('setUserList', this.userList)
    } else {
      this.userList = this.$store.state.userList
    }
  }

  routeToItem (destinationid: number): void {
    this.$router.push('item/' + destinationid)
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
