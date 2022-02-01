export const state = () => ({
  openDialog: false,
})

export const mutations = {
  toggle(state) {
    state.openDialog = !state.openDialog
  },
}
