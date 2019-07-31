<template>
  <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
  </ul>
</template>
<script type="text/ecmascript-6">
import { setTimeout } from 'timers';
  //模拟后台服务器请求回来的数据
  const messageDetails=[
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'},
  ]
  export default {
    data () {
          return {
            messageDetail:{}
          }
    },
    mounted () {
      setTimeout(()=>{
        //得到当前页面所在的id
        const id=this.$route.params.id*1
        const details=messageDetails.find(detail=>detail.id===id)
        this.messageDetail=details
      },1000)
    },
    watch:{
      $route (value) {
        setTimeout(()=>{
          const id=this.$route.params.id *1
          const details=messageDetails.find(detail=>detail.id===id)
          this.messageDetail=details
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>
