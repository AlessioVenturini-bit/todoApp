<template>
  <v-row class="justify-center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-toolbar flat color="blue-grey" dark>
          <v-toolbar-title>Create e new Todo</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            v-model="newTodoName"
            filled
            label="Title"
          ></v-text-field>

          <v-textarea v-model="newTodoDetails" filled label="Text"></v-textarea>
        </v-card-text>

        <v-divider class="my-2"></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            depressed
            @click.prevent="addNewTodo(newTodoName, newTodoDetails)"
          >
            Add Todo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { computed, reactive, useStore, ref } from '@nuxtjs/composition-api'

export default {
  name: 'AddToDo',
  setup() {
    const toggleDialog = () => store.commit('dialog/toggle')
    const dialog = computed(() => store.state.dialog.openDialog)
    const store = useStore()
    const todos = computed(() => store.state.todos.list)

    const newTodoName = ref('')
    const newTodoDetails = ref('')
    const todoObj = reactive({
      name: newTodoName,
      details: newTodoDetails,
    })
    const add = () => store.commit('todos/add', todoObj)
    function resetTodoDialog() {
      newTodoName.value = ''
      newTodoDetails.value = ''
    }
    const addNewTodo = function (title, details) {
      if (title === '' && details === '') {
        return toggleDialog()
      } else {
        add()
        resetTodoDialog()
        toggleDialog()
      }
    }

    return {
      todos,
      add,
      toggleDialog,
      dialog,
      newTodoName,
      newTodoDetails,
      addNewTodo,
    }
  },
}
</script>
