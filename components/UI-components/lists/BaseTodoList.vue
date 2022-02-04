<template>
  <v-list two-line>
    <v-list-item v-for="todo in todos" :key="todo.id">
      <v-list-item-avatar>
        <v-img :src="todo.icon"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ todo.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ todo.details }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-icon class="mr-2">
        <v-btn color="primary" fab small @click="editTest(todo)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-list-item-icon>
      <v-list-item-icon>
        <v-btn color="secondary" fab small>
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
      </v-list-item-icon>
      <v-list-item-icon @click="remove(todo)">
        <v-btn color="error" fab small>
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  name: 'BaseTodoList',
  emits: ['find'],
  setup(_, ctx) {
    const store = useStore()
    const todos = computed(() => store.state.todos.list)
    const toggleDialog = () => store.commit('dialog/toggle')

    const remove = function (todo) {
      const remove = () => store.commit('todos/remove', todo)
      remove()
    }

    const find = function (todo) {
      const find = () => store.commit('todos/find', todo)
      toggleDialog()
      find()
    }

    const editTest = function (todo) {
      const setTodo = () => store.commit('todos/SET_TO_DO', todo)
      const setEditStatus = () => store.commit('todos/SET_EDIT_STATUS')
      setTodo()
      setEditStatus()
      toggleDialog()
    }

    return {
      todos,
      remove,
      find,
      editTest,
    }
  },
}
</script>
