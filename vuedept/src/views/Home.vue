<template>
  <div id="home">
    <div id="userBoxList">
      <UserBox class="userBox" v-for="n in 30" :key="n" msg="test"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserBox from '@/components/UserBox.vue' // @ is an alias to /src

@Component({
  components: {
    UserBox
  }
})
export default class Home extends Vue {}
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
