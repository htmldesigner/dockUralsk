export const state = () => ({
  geoDate: null
})

export const mutations = {
  SET_GEO_DATA(state, payload) {
    state.geoDate = payload
  },
  CLEAR_GEO_DATE(state, payload) {
    state.geoDate = null
  }
}

export const actions = {}

export const getters = {
  getGeoDate: (state) => state.geoDate || null,
}
