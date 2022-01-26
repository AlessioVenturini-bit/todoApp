
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
// setup (){
    
//     const formOpen = ref(false);
//     const openForm = function () {
//       formOpen.value = !formOpen.value
//     }

//     const todos = ref([])
//     const newTodo = ref("")

//     const addToDo = function () {
//       todos.value.push({
//       id: Date.now(),
//       done : false,
//       name : newTodo.value
//     })
//     newTodo.value = ''
//     }
//      function completeToDo (index) {
//       todos.value.splice(index, 1)
//     }
    
//     return {
//       openForm, addToDo, todos, formOpen, newTodo, completeToDo
//     }
//     },
<template>
  
<div>
    <v-card-title>
    Add your Todos
    </v-card-title>

    <v-card-text>
      <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title >TEST</v-list-item-title>
            <v-list-item-subtitle >Test details</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="dialog = !dialog"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    </v-card-actions>
    <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-text>
              <v-text-field label="Add a new task"></v-text-field>

              <small class="grey--text">* This doesn't actually save.</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
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
  export default {
    name: 'IndexPage',
    data: () => ({
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
      ],
      dialog: false
    }),
  }
</script>
