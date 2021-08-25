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
  }
}
// Запрос полей формы для страницы подачи заявления
export const actions = {
  async loadServiceRequest({commit}, params) {
    try {
      const response = await this.$axios.$get(encodeURIComponent('api/services/' + params + '/getForm'))
      await commit('SET_SERVICE_REQUEST', response)
    } catch (error) {
      throw error
    }
  },

// Запрос всех ранее сделанных запросов на услуги (Личный кабинет)
  async getServiceRequestsList({commit}, params) {
    try {
      const response = await this.$axios.$get('api/cases')


      let test = [{
        "id": 242,
        "number": "Z",
        "object": "Кафе",
        "service": "Аыдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "ЗО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "10.06.2021 17:05",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 243,
        "number": "G",
        "object": "Кафе \"Бакинский дворик\"",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Альмира А.",
        "begin_date": "12.05.2021 10:18",
        "status": "Выдано",
        "status_color": null,
        "time_out": false
      }, {
        "id": 244,
        "number": "U",
        "object": "Антон Шашков",
        "service": "Жыдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "16.08.2021 10:04",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 245,
        "number": "REK-000001",
        "object": "Антон Шашков",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "16.08.2021 12:38",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 246,
        "number": "REK-000001",
        "object": "12",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "16.08.2021 15:12",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 247,
        "number": "REK-000002",
        "object": "Антон Шашков",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "17.08.2021 16:16",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 248,
        "number": "REK-000003",
        "object": "3443543543",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "17.08.2021 16:45",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 249,
        "number": "REK-000004",
        "object": "234",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "18.08.2021 15:42",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 250,
        "number": "REK-000005",
        "object": "123213213",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 09:51",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 251,
        "number": "REK-000006",
        "object": "324324",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 09:54",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 252,
        "number": "REK-000007",
        "object": "231434",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 09:57",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 253,
        "number": "REK-000008",
        "object": "Антон Шашков",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 11:05",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 254,
        "number": "REK-000009",
        "object": "343242",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 11:14",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 255,
        "number": "REK-000013",
        "object": "324",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 13:35",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 256,
        "number": "REK-000011",
        "object": "234234",
        "service": "Аыдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "БО ТЕСТ",
        "responsible": "Ахатова Г.",
        "begin_date": "19.08.2021 13:41",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }, {
        "id": 258,
        "number": "REK-000010",
        "object": "Антон Шашков",
        "service": "Выдача технических условий на присоединение к электрическим сетям для юридических лиц",
        "org": "АО ТЕСТ",
        "responsible": "Эльмира А.",
        "begin_date": "19.08.2021 15:58",
        "status": "В обработке",
        "status_color": null,
        "time_out": false
      }]


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
  getServiceCases: (state) => state.serviceStatus.case,
  getServiceSteps: (state) => state.serviceStatus.steps
}
