export const state = () => ({
  key: null, // ЭПЦ Ключ Устанавливается в плагине ncaLayer
  serviceRequest: null
})

export const mutations = {
  SET_KEY(state, payload) {
    state.key = payload
  },
  SET_SERVICE_REQUEST(state, payload) {
    state.serviceRequest = payload
  }
}

export const actions = {
  async loadServiceRequest({commit}, params) {
    try {
      const response = await this.$axios.$get('api/services/' + params + '/getForm')
      commit('SET_SERVICE_REQUEST', response)
    } catch (error) {
      throw error
    }
  }
}

export const getters = {
  getServiceRequest: (state) => state.serviceRequest
}
