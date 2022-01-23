<template>
<div>
  <div>
    <h1>Your todos</h1>
  </div>
  <div>
    <h2>list of todos</h2>
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="todo.id" @click="completeToDo(index)">{{ todo.name }}</li>
    </ul>
  </div>
  <div>
    <h3>completed todos</h3>
    <button @click.prevent="openForm">Add todos</button>
    <div v-if="formOpen">
      <form @submit.prevent="addToDo">
      <label for="name"> New task</label>
      <input v-model="newTodo" type="text" >
      <button> Add task</button>
    </form>
    </div>
    
  </div>
</div>

</template>


<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  name: 'IndexPage',
  setup (){
    
    const formOpen = ref(false);
    const openForm = function () {
      formOpen.value = !formOpen.value
    }

    const todos = ref([])
    const newTodo = ref("")

    const addToDo = function () {
      todos.value.push({
      id: Date.now(),
      done : false,
      name : newTodo.value
    })
    newTodo.value = ''
    }
     function completeToDo (index) {
      todos.value.splice(index, 1)
    }
    
    return {
      openForm, addToDo, todos, formOpen, newTodo, completeToDo
    }
    },
  }
</script>
