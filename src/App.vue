<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
      <Footer></Footer>
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
                todos:[
                    {id:3,title:'吃饭饭',complete:false},
                    {id:5,title:'睡觉觉',complete:false},
                    {id:9,title:'喝水水',complete:false}
                ]
            }
        },
        methods: {
            addTodo (todo) {
                this.todos.unshift(todo)
            },
            deleteTodo (index) {
                this.todos.splice(index,1)
            },
            updateTodo (todo,complete) {
                todo.complete=complete
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
