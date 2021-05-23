<template>
  <div id="header">
      <img alt="Dept logo" src="../assets/logo.svg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
#header {
    padding: 15px;
    margin-bottom: 40px;
    border-bottom: solid;
}
</style>
