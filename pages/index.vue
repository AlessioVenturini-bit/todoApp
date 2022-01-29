<!-- <div>
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
</div> -->
// setup (){ // const formOpen = ref(false); // const openForm = function () {
// formOpen.value = !formOpen.value // } // const todos = ref([]) // const
newTodo = ref("") // const addToDo = function () { // todos.value.push({ // id:
Date.now(), // done : false, // name : newTodo.value // }) // newTodo.value = ''
// } // function completeToDo (index) { // todos.value.splice(index, 1) // } //
return { // openForm, addToDo, todos, formOpen, newTodo, completeToDo // } // },
<template>
  <div>
    <v-card-title> Add your Todos </v-card-title>

    <v-card-text>
      <v-list three-line>
        <template v-for="(todo, index) in todos">

          <v-divider
            v-if="todo.divider"
            :key="index"
            :inset="todo.inset"
          ></v-divider>

          <v-list-item :key="todo.id">
            <v-list-item-avatar>
              <v-img :src="todo.icon"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ todo.name }}</v-list-item-title>
              <v-list-item-subtitle>{{todo.details}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn class="mx-2" fab dark color="indigo" @click="dialog = !dialog">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="newTodoName"
            label="Add a new task"
          ></v-text-field>
          <v-text-field
            v-model="newTodoDetails"
            label="Add details"
          ></v-text-field>
          <small class="grey--text">* This doesn't actually save.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            color="primary"
            @click.prevent="add"
            @click="dialog = false"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, computed, useStore, reactive } from '@nuxtjs/composition-api'

export default {
  name: 'IndexPage',
  setup() {
    const dialog = ref(false)
    const store = useStore()

    const todos = computed(() => store.state.todos.list)

    const newTodoName = ref('')
    const newTodoDetails = ref('')
    const todoObj = reactive({
      name: newTodoName,
      details: newTodoDetails,
    })
    const add = () => store.commit('todos/add', todoObj)

    return {
      dialog,
      todos,
      newTodoName,
      add,
      newTodoDetails,
    }
  },
}
</script>
