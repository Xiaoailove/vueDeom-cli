<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
      <Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    import Header from "./components/Header.vue"
    import List from "./components/List.vue"
    import Footer from "./components/Footer.vue"
    export default {
        data () {
            return {
                todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
            }
        },
        methods: {
            addTodo (todo) {
                this.todos.unshift(todo)
            },
            deleteTodo (index) {
                console.log(this.todos)
                this.todos.splice(index,1)
            },
            updateTodo (todo,complete) {
                todo.complete=complete
            },
            selectAll (completed) {
                //forEach是对数组中的每一项进行遍历，此处每一项为对象，动了对象某一个属性本身是可以调用set方法监测到的
                this.todos.forEach((todo)=>todo.complete=completed)
            },
            deleteCompleted () {
                this.todos = this.todos.filter((todo)=>!todo.complete)
            }
        },
        //深度监视todo数组的变化，解决刷新时不能保存原来状态的问题
        watch:{
            todos:{
                deep:true,
                handler: function (value) {
                    localStorage.setItem('todos_key',JSON.stringify(value))
                }
            }
        },
        components: {
            Header,
            List,
            Footer
        }
    }
</script>
<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
