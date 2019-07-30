<template>
  <div>
    <h1>APP</h1>
    <img src="./assets/logo.png" alt="logo">
    <HollowWorld />
  </div>
</template>
<script type="text/ecmascript-6">
  import HollowWorld from './components/HelloWorld.vue'
  export default {
    components: {
      HollowWorld
    }
  }
</script>
<style scoped>
  img {
    width: 200px;
    height: 200px;
  }
</style>
