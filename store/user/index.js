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
  },

  ADD_ITEM_SERVICE_REQUEST(state, payload) {

    for (let items in state.serviceRequest) {
      if (state.serviceRequest[items].sections) {
        for (let item of state.serviceRequest[items].sections) {
          for (let i of item.rows) {
            if (i.fields?.length) {
              for (let elem of i.fields) {
                if (elem.type === 'group') {
                  elem.items.push(payload)
                }
              }
            }
          }
        }
      }
    }

  },

  REMOVE_ITEM_SERVICE_REQUEST(state, payload) {

    for (let items in state.serviceRequest) {
      if (state.serviceRequest[items].sections) {
        for (let item of state.serviceRequest[items].sections) {
          for (let i of item.rows) {
            if (i.fields?.length) {
              for (let elem of i.fields) {
                if (elem.type === 'group') {
                  elem.items.splice(payload, 1)
                }
              }
            }
          }
        }
      }
    }

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
