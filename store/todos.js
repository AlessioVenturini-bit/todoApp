export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, todo ) {
    state.list.push({
      id: Date.now(),
      done: false,
      name: todo.name,
      details: todo.details,
      icon: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      divider: true
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
