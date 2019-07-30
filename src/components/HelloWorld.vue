<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HollowWorld',
    data () {
      return {
        title: 'HollowWorld 组件'
      }
    }
  }
</script>
<style scoped>
  h1 {
    color: red
  }
</style>
