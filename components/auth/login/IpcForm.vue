<template>
  <form>
    <div class="form-group">
      <label class="form-label">ЭПЦ</label>
      <button class="btn_primary btn_block" @click.prevent="runNca">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.94861 19.135C2.8934 19.135 1.90134 18.7241 1.15521 17.9779C-0.38507 16.4377 -0.38507 13.9314 1.15521 12.3911L10.0189 3.52746C11.0647 2.48162 12.7665 2.48162 13.8123 3.52746C14.8581 4.5733 14.8581 6.27504 13.8123 7.32088L7.29253 13.8406C7.03351 14.0997 6.61346 14.0997 6.35438 13.8406C6.09531 13.5816 6.09531 13.1615 6.35438 12.9025L12.8741 6.38269C13.4027 5.85415 13.4027 4.99414 12.8741 4.46561C12.6181 4.20954 12.2777 4.06855 11.9156 4.06855C11.5535 4.06855 11.2131 4.20954 10.957 4.46561L2.09336 13.3293C1.07039 14.3523 1.07039 16.0168 2.09336 17.0398C2.58895 17.5353 3.24782 17.8083 3.94861 17.8083C4.64941 17.8083 5.30832 17.5353 5.80387 17.0398L14.8756 7.96808C15.6107 7.23301 16.0154 6.25572 16.0154 5.21616C16.0154 4.1766 15.6107 3.1993 14.8756 2.46423C13.3581 0.946776 10.8891 0.94682 9.3717 2.46423L2.64392 9.19197C2.38489 9.45104 1.96484 9.45104 1.70577 9.19197C1.4467 8.9329 1.4467 8.51289 1.70577 8.25382L8.43355 1.52604C10.4683 -0.50868 13.779 -0.50868 15.8137 1.52604C16.7994 2.51169 17.3423 3.82222 17.3423 5.21616C17.3423 6.61009 16.7994 7.92058 15.8137 8.90627L6.74202 17.9779C5.99589 18.7241 5.00383 19.135 3.94861 19.135Z"
            fill="white"/>
        </svg>
        <span>Войти по ЭЦП</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "IpcForm",
  computed: {
    xmlKey() {
      return this.$store.state.user.key
    }
  },
  watch: {
    xmlKey: {
      handler: function () {
        this.sendKey()
      }
    },
  },
  data() {
    return {}
  },
  methods: {
    async runNca() {
      await this.$ncaLayer()
    },
    async sendKey() {
      try {
        await this.$nuxt.$emit('loader', true)
        await this.$auth.loginWith('local', {data: {sign: this.xmlKey}})
        await this.$nuxt.$emit('loader', false)
        this.$emit('close')
      } catch (e) {
        this.$nuxt.$emit('showRegistrationForm')
        this.$store.commit('user/SET_KEY', null)
        this.$nuxt.$emit('loader', false)
      }
    }
  }
}
</script>

<style scoped>

</style>
