<template>
  <ValidationObserver ref="form" v-slot="{ valid }">
    <form @submit.prevent="onSubmit">
      <div class="form-group mb-3">
        <label for="login" class="form-label">{{$t('BIN_INN')}}</label>
        <ValidationProvider rules="required|numberOnly|validateIIN:12" v-slot="{ errors }">
          <input
            id="login"
            type="text"
            :class="{'is-invalid': errors[0]}"
            :placeholder="$t('Y_BIN_INN')"
            v-model.trim="user.login"
            class="form-control"
            name="login"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>

        </ValidationProvider>
      </div>

      <div class="form-group mb-3">
        <label for="password" class="form-label">{{$t('password')}}</label>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <input
            id="password"
            type="password"
            v-model.trim="user.password"
            class="form-control"
            :class="{'is-invalid': errors[0]}"
            name="password"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>
      </div>

      <div class="form-group" style="margin-top: 36px ">
        <button :disabled="!valid" type="submit" class="btn_primary btn_block">{{$t('buttons.enter')}}</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  components: {ValidationProvider, ValidationObserver},
  name: "FormLogin",
  data() {
    return {
      user: {
        login: null,
        password: null
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (this.user.login.length && this.user.password.length) {
          await this.$nuxt.$emit('loader', true)
          await this.$auth.loginWith('local', {data: this.user})
          await this.$nuxt.$emit('loader', false)
          this.$emit('close')
        }
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
