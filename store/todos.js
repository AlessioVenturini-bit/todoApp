export const state = () => ({
  list: [],
  todo: {},
  edit: false,
})

export const getters = {
  getToDo(state) {
    return state.todo
  },
}
export const mutations = {
  add(state, todo) {
    state.list.push({
      id: Date.now(),
      done: false,
      name: todo.name,
      details: todo.details,
      icon: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      divider: true,
    })
  },
  SET_TO_DO(state, payload) {
    state.todo = payload
  },
  SET_TODO_NAME(state, payload) {
    state.todo.name = payload
  },
  SET_TODO_DETAILS(state, payload) {
    state.todo.details = payload
  },
  SET_EDIT_STATUS(state) {
    state.edit = !state.edit
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  find(state, todo) {
    const todoIndex = state.list.indexOf(todo)
    state.edit = true
    return state.list[todoIndex]
  },
  edit(state, todo) {
    const todoIndex = state.list.findIndex((x) => x.id === todo.value.id)
    const target = state.list[todoIndex]
    const source = todo.value
    const returnedTarget = Object.assign(target, source)
    state.edit = !state.edit
    return returnedTarget
  },
}
