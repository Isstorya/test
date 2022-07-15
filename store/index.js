export const state = () => ({
  email: ""
})

export const mutations = {
  setEmail(state, email){
    state.email = email
  }
}

export const actions = {
  setEmail({commit}, email) {
    commit("setEmail", email)
  }
}
