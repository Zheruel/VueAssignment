<template>
  <div class="item">
    <div id="backBanner">
      <router-link to="/">
        <img id="backArrow" src="../assets/backarrow.svg">
      </router-link>
    </div>
    <div id="detailsCard">
        <img src="https://randomuser.me/api/portraits/men/4.jpg">
        <p>Title Name Name</p>
        <p>Date of birth</p>
        <p>E-mail</p>
        <p>Phone number</p>
    </div>
    <h1>This is the item page {{$route.params.id}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop() private id!: number;
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
