export const state = () => ({
  geoDate: null,
  goToUrl: null
})

export const mutations = {
  SET_GEO_DATA(state, payload) {
    state.geoDate = payload
  },
  CLEAR_GEO_DATE(state, payload) {
    state.geoDate = null
  },
  SET_GO_TO_URL(state, payload){
    state.goToUrl = payload
  },
  CLEAR_GO_TO_URL(state, payload){
    state.goToUrl = payload
  }
}

export const actions = {

}

export const getters = {
  getGeoDate: (state) => state.geoDate || null,
  getGoToURL: (state) => state.goToUrl || null
}
