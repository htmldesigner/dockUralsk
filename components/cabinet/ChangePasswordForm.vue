<template>
  <div>

    <ValidationObserver ref="form" v-slot="{ valid }">
      <div class="row">

<!--        <div class="col-xl-4 col-lg-12">-->
<!--          <div class="form-group mb-4">-->
<!--            <label for="currentPassword" class="form-label">Текущий пароль<span-->
<!--              class="required">*</span></label>-->
<!--            <input-->
<!--              id="currentPassword"-->
<!--              type="text"-->
<!--              class="form-control"-->
<!--              v-model="currentPassword"-->
<!--              name="login">-->
<!--            <div class="invalid-feedback">-->
<!--              Login is invalid-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <div class="col-xl-4 col-lg-12">
          <div class="form-group mb-4">
            <label for="newPassword" class="form-label">Новый пароль<span class="required">*</span></label>
            <ValidationProvider name="confirm" rules="required|digits_between:8,35" v-slot="{ errors }">
              <input
                id="newPassword"
                type="password"
                class="form-control"
                v-model="newPassword"
                :class="{'is-invalid': errors[0]}"
                placeholder="Новый пароль"
              >
              <div v-if="errors[0]" class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="col-xl-4 col-lg-12">
          <div class="form-group mb-4">
            <label for="confirmPassword" class="form-label">Подтвердить пароль<span class="required">*</span></label>
            <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
              <input
                id="confirmPassword"
                type="text"
                class="form-control"
                v-model="confirmPassword"
                :class="{'is-invalid': errors[0]}"
                placeholder="Подтвердить пароль"
              >
              <div v-if="errors[0]" class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </div>



        <div class="col-xl-4 col-lg-12" style="padding-top: 31px">
          <button  type="button" :disabled="!valid" @click.prevent="resetPassword" class="btn_primary btn_block">
            {{ $t('buttons.save') }}
          </button>
        </div>

      </div>





    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "ChangePasswordForm",
  components: {ValidationProvider, ValidationObserver},
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  },
  methods: {
    async resetPassword() {
      try {
        const data = {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        }
        this.$store.dispatch('cabinet/changePassword', data)
        alert("Пароль изменен")
      }catch (e) {
        alert("Ошибка отпраки")
      }
    }
  },
}
</script>

<style scoped>

</style>
