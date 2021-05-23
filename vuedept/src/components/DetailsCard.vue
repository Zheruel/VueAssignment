<template>
  <div id="detailsCard">
    <img src="https://randomuser.me/api/portraits/men/4.jpg">
      <p>Title Name Name</p>
      <p>Date of birth</p>
      <p>E-mail</p>
      <p>Phone number</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RandomUser } from '../interfaces/RandomUser'

@Component
export default class DetailsCard extends Vue {
  @Prop() private user!: RandomUser;
}
</script>

<style scoped lang="scss">
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
