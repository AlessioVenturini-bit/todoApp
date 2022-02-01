<template>
  <v-list two-line>
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
          <v-list-item-subtitle>{{ todo.details }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon class="mr-2">
          <v-btn color="primary" fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-icon>
        <v-list-item-icon>
          <v-btn color="secondary" fab small>
            <v-icon>mdi-check-bold</v-icon>
          </v-btn>
        </v-list-item-icon>
        <v-list-item-icon @click="test(todo.id)">
          <v-btn color="error" fab small>
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  name: 'BaseTodoList',
  setup() {
    const store = useStore()
    const todos = computed(() => store.state.todos.list)

    const test = function (todoId) {
      const remove = () => store.commit('todos/remove', todoId)
      remove()
    }
    return {
      todos,
      test,
    }
  },
}
</script>
