<template>
  <v-row class="justify-center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-toolbar flat color="blue-grey" dark>
          <v-toolbar-title v-if="!editStatus"
            >Create e new Todo</v-toolbar-title
          >
          <v-toolbar-title v-else>Edit Todo</v-toolbar-title>
        </v-toolbar>

        <v-card-text v-if="!editStatus">
          <v-text-field
            v-model="newTodoName"
            filled
            label="Title"
          ></v-text-field>

          <v-textarea v-model="newTodoDetails" filled label="Text"></v-textarea>
        </v-card-text>
        <v-card-text v-else>
          <v-text-field v-model="todoItemTitle" filled label="Title">
          </v-text-field>

          <v-textarea v-model="todoItemDetails" filled label="Text">
          </v-textarea>
        </v-card-text>

        <v-divider class="my-2"></v-divider>

        <v-card-actions v-if="!editStatus">
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            depressed
            @click.prevent="addNewTodo(newTodoName, newTodoDetails)"
          >
            Add Todo
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer></v-spacer>
          <v-btn color="success" depressed @click.prevent="edit()">
            Edit Todo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { computed, ref, reactive, useStore } from '@nuxtjs/composition-api'

export default {
  name: 'AddToDo',
  setup() {
    const toggleDialog = () => store.commit('dialog/toggle')
    const dialog = computed(() => store.state.dialog.openDialog)
    const editStatus = computed(() => store.state.todos.edit)
    const store = useStore()
    const todos = computed(() => store.state.todos.list)

    const newTodoName = ref('')
    const newTodoDetails = ref('')
    const todoObj = reactive({
      name: newTodoName,
      details: newTodoDetails,
    })
    function resetTodoDialog() {
      newTodoName.value = ''
      newTodoDetails.value = ''
    }
    const add = () => store.commit('todos/add', todoObj)

    const addNewTodo = function (title, details) {
      if (title === '' && details === '') {
        return toggleDialog()
      } else {
        add()
        resetTodoDialog()
        toggleDialog()
      }
    }

    const todoItem = computed(() => store.state.todos.todo)

    const todoItemTitle = computed({
      get: () => store.state.todos.todo.name,
      set: (val) => store.commit('todos/SET_TODO_NAME', val),
    })
    const todoItemDetails = computed({
      get: () => store.state.todos.todo.details,
      set: (val) => store.commit('todos/SET_TODO_DETAILS', val),
    })

    const editTodo = () => store.commit('todos/edit', todoItem)

    const edit = function () {
      editTodo()
      toggleDialog()
    }

    return {
      todos,
      add,
      toggleDialog,
      dialog,
      newTodoName,
      newTodoDetails,
      addNewTodo,
      editStatus,
      todoItemTitle,
      todoItemDetails,
      edit,
    }
  },
}
</script>
