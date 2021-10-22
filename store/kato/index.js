export const state = () => ({
  KATO_CHILD: [],
  KATO_STREETS: [],
  STREET_HOUSES: [],
  HOUSE_FLATS: [],
  KATO_CODE: ''
})

export const mutations = {
  SET_KATO_CHILD(state, payload) {
    state.KATO_CHILD.push(payload)
  },
  SET_KATO_STREETS(state, payload) {
    state.KATO_STREETS = [...payload]
  },
  SET_STREET_HOUSES(state, payload) {
    state.STREET_HOUSES = [...payload]
  },
  SET_HOUSE_FLATS(state, payload) {
    state.HOUSE_FLATS = [...payload]
  },
  SPLIT_KATO(state, indexInArray) {
    state.KATO_CHILD.splice(indexInArray)
  },
  SET_KATO_CODE(state, code){
    console.log(code, 'mutations')
    state.KATO_CODE = +code
  }
}

export const actions = {

  async setKatoCode({commit}, payload){
    try {
      console.log(payload, 'action')
      commit('SET_KATO_CODE', payload)
    }catch (e) {
      throw e
    }
  },

  async splitKato({commit}, indexInArray) {
    try {
      commit('SPLIT_KATO', indexInArray)
    } catch (error) {
      throw error
    }
  },

  async getKatoChild({commit}, payload = 0) {
    try {
      const response = await this.$axios.$get('http://localhost:8015/GetKatoChild/' + payload)
      commit('SET_KATO_CHILD', response)
    } catch (error) {
      throw error
    }
  },

  async getKatoStreets({commit}, payload) {
    try {
      if (payload.street) {
        const response = await this.$axios.$get('http://localhost:8015/GetKatoStreets/' + payload.kato + '/' + payload.street.trim())
        commit('SET_KATO_STREETS', response)
      }
    } catch (error) {
      throw error
    }
  },

  async getStreetHouses({commit}, payload) {
    try {
      const response = await this.$axios.$get('http://localhost:8015/GetStreetHouses/' + payload)
      commit('SET_STREET_HOUSES', response)
    } catch (error) {
      throw error
    }
  },

  async getHouseFlats({commit}, payload) {
    try {
      const response = await this.$axios.$get('http://localhost:8015/GetHouseFlats/' + payload)
      commit('SET_HOUSE_FLATS', response)
    } catch (error) {
      throw error
    }
  }

}

export const getters = {
  getKatoChild: state => state.KATO_CHILD,
  getKatoStreets: state => state.KATO_STREETS,
  getStreetHouses: state => state.STREET_HOUSES,
  getHouseFlats: state => state.HOUSE_FLATS,
  getKatoCode: state => state.KATO_CODE
}


