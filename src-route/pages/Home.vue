<template>
  <div>
      <h1>Home</h1>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link to="/home/news">News</router-link>
          </li>
          <li>
            <router-link to="/home/message">Message</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style  scoped>

 
</style>
