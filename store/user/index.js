export const state = () => ({
  user: null,
  key: null
})

export const mutations = {
  SET_KEY(state, payload) {
    state.key = payload
  }
}
//
// export const actions = {
//   async login({commit}, user) {
//     try {
//       // Login user
//       const account = await this.$axios.$get('http://icanhazip.com')
//
//       //Get JWT and USER from October
//       const {userName, token} = account
//
//       // Set JWT to cookie ????
//       // Code
//
//
//       // Set the user locally
//       // commit('SET_USER', {userName, token})
//
//       //Demo
//       commit('SET_USER', user)
//     } catch (error) {
//       throw error
//     }
//   }
// }
