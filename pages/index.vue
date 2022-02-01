<template>
  <div>
    <v-card-title> Add your Todos </v-card-title>

    <v-card-text>
      <base-todo-list></base-todo-list>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn class="mx-2" fab dark color="indigo" @click="toggleDialog">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
    <add-to-do></add-to-do>
  </div>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'

export default {
  name: 'IndexPage',
  setup() {
    const store = useStore()
    const toggleDialog = () => store.commit('dialog/toggle')

    return {
      toggleDialog,
    }
  },
}
</script>
