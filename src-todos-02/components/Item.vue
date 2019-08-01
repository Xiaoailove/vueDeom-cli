<template>
  <li :style="{background:bgcolor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script type="text/ecmascript-6">
    export default { 
        props:{
            todo:Object,
            index:Number,
        },
        data () {
            return {
                bgcolor:'white',
                isShow:false
            }
        },
        computed:{
            isCheck: {
                get () {
                    return this.todo.complete
                },
                set (value) {
                    PubSub.publish('updateTodo',{todo:this.todo,complete:value})
                }
            }
        },
        methods:{
            handleEnter (isEnter) {
                if(isEnter){
                    this.bgcolor='#cccccc'
                    this.isShow=true
                }else{
                    this.bgcolor='white'
                    this.isShow=false
                }
            },
            deleteItem () {
                if(confirm('确定删除吗')){
                    this.$bus.$emit('deleteTodo',this.index)
                }
            }
        }  
    }
</script>
<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>
