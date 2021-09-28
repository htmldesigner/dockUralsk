export const state = () => ({
  userProfile: {}
})

export const mutations = {
  ADD_USER_PROFILE(state, payload) {
    state.userProfile = payload
  },

  DISABLED_FIELD(state, payload) {
    if (payload) {
      changeCheckValue(state.userProfile)
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
}

export const actions = {
  async getUserProfile({commit}, params) {
    try {
      const response = await this.$axios.$get('/api/profile')
      commit('ADD_USER_PROFILE', response)
    } catch (error) {
      throw error
    }
  },

  async changePassword({commit}, payload){
    try {
      this.$axios.$post('/api/user/password', payload)
    }catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  userProfile: (state) => state.userProfile
}
