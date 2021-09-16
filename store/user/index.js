export const state = () => ({
  key: null, // ЭПЦ Ключ Устанавливается в плагине ncaLayer
  serviceRequest: null, // Форма услуги
  serviceRequestList: null, // Списак заказанных услуг
  serviceStatus: null, // Статус услуги
  serviceList: []
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

  DISABLED_FIELD(state, payload) {
    if (payload) {
      changeCheckValue(state.serviceRequest)
    }

    function changeCheckValue(serviceRequest) {
      for (let items in serviceRequest) {
        if (typeof serviceRequest[items] === 'object' || Array.isArray(serviceRequest[items])) {
          changeCheckValue(serviceRequest[items])
          if (serviceRequest[items]?.length) {
            serviceRequest[items].forEach(el => {
              if (el.fields) {
                el.fields.forEach(target => {
                  if (target.disabledIf === payload.value) {
                    target.disabled = !target.disabled
                  }
                })
              }
            })
          }
        }
      }
    }
  },

  ADD_SERVICE(state, payload) {
    state.serviceList = []
    if (payload.length) {
      payload.forEach(el => {
        if (el.list_services) {
          state.serviceList.push(...el.list_services)
        }
      })
    }
  }
}

export const actions = {

  // Для фильтра
  async loadServiceList({commit}, params) {
    try {
      const response = await this.$axios.$get('/api/recipients?lang=' + params)
      commit('ADD_SERVICE', response)
    } catch (error) {
      throw error
    }
  },

  // Запрос полей формы для страницы подачи заявления
  async loadServiceRequest({commit}, params) {
    try {
      const response = await this.$axios.$get('api/services/' + encodeURIComponent(params.slug) + '/getForm' + '?lang=' + params.locale)
      await commit('SET_SERVICE_REQUEST', response)
    } catch (error) {
      throw error
    }
  },

// Запрос всех ранее сделанных запросов на услуги (Личный кабинет)
  async getServiceRequestsList({commit}, params) {
    try {
      const response = await this.$axios.$get('api/cases')
      await commit('SET_REQUEST_LIST', response)
    } catch (error) {
      throw error
    }
  },

// Запрос данных о текушем состоянии услуги (Личный кабинет)
  async getServiceStatus({commit}, payload) {
    try {
      const response = await this.$axios.$get('/api/case/' + payload.id + '?lang=' + payload.locale)
      await commit('SET_SERVICE_STATUS', response)
    } catch (error) {
      throw error
    }
  }

}

export const getters = {
  getServiceRequest: (state) => state.serviceRequest,
  getRequestList: (state) => state.serviceRequestList,
  getServiceCases: (state) => state.serviceStatus?.case || null,
  getServiceSteps: (state) => state.serviceStatus?.steps || null,
  getServiceList: (state) => state.serviceList
}
