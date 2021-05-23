<template>
  <div class="userBox">
    <div class="userImage">
        <img :src="user.pictureURL">
    </div>
    <div class="userContent">
        <p>{{user.title}} {{user.firstName}}</p>
        <p>{{user.lastName}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RandomUser } from '../interfaces/RandomUser'

@Component
export default class UserBox extends Vue {
  @Prop() private user!: RandomUser;
}
</script>

<style scoped lang="scss">
.userBox {
  display: flex;
  flex-direction: row;
  min-width: 350px;
  margin: 0 30px 30px 0;
  background-color: #FAFAFA;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  .userImage {
    width: 35%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .userContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    padding-left: 10px;

    p {
        text-align: left;
        margin: 0 0 5px 0;
    }
  }
}

.userBox:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

@media screen and (max-width: 1024px) {
  .userBox{
    width: 100%;
    margin-right: 0;
  }
}
</style>
