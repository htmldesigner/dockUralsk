export const state = () => ({
  key: null, // ЭПЦ Ключ Устанавливается в плагине ncaLayer
  serviceRequest: null, // Форма услуги
  serviceRequestList: null, // Списак заказанных услуг
  serviceStatus: null, // Статус услуги

})

export const mutations = {
  SET_KEY(state, payload) {
    state.key = payload
  },
  SET_SERVICE_REQUEST(state, payload) {
    state.serviceRequest = payload
  },

  SET_REQUEST_LIST(state, payload) {
    state.serviceRequestList = payload
  },

  SET_SERVICE_STATUS(state, payload) {
    state.serviceStatus = payload
    if (state.serviceStatus.steps) {
      state.serviceStatus.steps.reverse()
    }
  },

  ADD_ITEM_SERVICE_REQUEST(state, payload) {
    for (let items in state.serviceRequest) {
      if (state.serviceRequest[items].sections) {
        for (let item of state.serviceRequest[items].sections) {
          for (let i of item.rows) {
            if (i.fields?.length) {
              for (let elem of i.fields) {
                if (elem.type === 'group' && elem.name === payload.groupName) {
                  elem.items.push(payload.el)
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
                if (elem.type === 'group' && elem.name === payload.groupName) {
                  elem.items.splice(payload.index, 1)
                }
              }
            }
          }
        }
      }
    }
  },

  DISABLED_FIELD(state, payload){
    if (payload){
      for (let items in state.serviceRequest) {
        if (state.serviceRequest[items].sections) {
          for (let item of state.serviceRequest[items].sections) {
            for (let i of item.rows) {
              if (i.fields?.length) {
                for (let elem of i.fields) {
                  if(elem.disabledIf === payload.value){
                    elem.disabled = payload.status
                  }
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
      await commit('SET_SERVICE_REQUEST', response)
    } catch (error) {
      throw error
    }
  },

  async getServiceRequestsList({commit}, params) {
    try {
      const response = await this.$axios.$get('api/cases')
      await commit('SET_REQUEST_LIST', response)
    } catch (error) {
      throw error
    }
  },


  async getServiceStatus({commit}, payload) {
    try {
      const response = await this.$axios.$get('/api/case/' + payload.id +'?lang=' + payload.locale)
      await commit('SET_SERVICE_STATUS', response)
    } catch (error) {
      throw error
    }
  }

}

export const getters = {
  getServiceRequest: (state) => state.serviceRequest,
  getRequestList: (state) => state.serviceRequestList,
   getServiceCases: (state) => state.serviceStatus.case,
  getServiceSteps: (state) => state.serviceStatus.steps
}
