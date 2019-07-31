<template>
  <div>
      <h1 v-if="!reqName">加载中。。。。。。</h1>
      <h1 v-else>
          点赞量最多的仓库名称
          <a :href="reqUrl">{{reqName}}</a>
      </h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
              reqName:'',
              reqUrl:''
          }
      },
      mounted () {
          const url='https://api.github.com/search/repositories?q=v&sort=stars'
          this.$http.get(url).then((response)=>{
              const result=response.data
              const {name, html_url} = result.items[0]
              //更新数据
              this.reqName=name
              this.reqUrl=html_url
          }).catch(error=>{
              alert('请求出错了'+error.statusText)
          })
      }
  }
</script>

<style  scoped>

 
</style>
