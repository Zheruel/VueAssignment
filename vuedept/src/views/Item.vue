<template>
  <div class="item">
    <div id="backBanner">
      <router-link to="/">
        <img id="backArrow" src="../assets/backarrow.svg">
      </router-link>
    </div>
    <DetailsCard v-if="this.user != undefined" :user='this.user'/>
    <p v-if="this.user == undefined">
      User data is not in vuex, please visit the home page as the app only grabs user data there by design.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetailsCard from '@/components/DetailsCard.vue'
import { RandomUser } from '../interfaces/RandomUser'

@Component({
  components: {
    DetailsCard
  }
})

export default class Item extends Vue {
    user: RandomUser = this.$store.state.userList[this.$route.params.id]
}
</script>

<style scoped lang="scss">
#backBanner {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    #backArrow {
      margin-left: 10px;
      width: 40px;
      height: 40px;
    }
}

#detailsCard {
  margin: auto;
  max-width: 20%;
  background-color: #FAFAFA;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  img {
    width: 100%
  }
}

@media screen and (max-width: 1024px) {
  #detailsCard{
    max-width: 60%;
  }
}
</style>
