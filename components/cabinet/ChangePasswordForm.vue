<template>
  <div>
    <div class="row">

      <div class="col-xl-4 col-lg-12">
        <div class="form-group mb-4">
          <label for="currentPassword" class="form-label">Текущий пароль<span
            class="required">*</span></label>
          <input id="currentPassword" type="text" class="form-control" value="234234"
                 name="login">
          <div class="invalid-feedback">
            Login is invalid
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-12">
        <div class="form-group mb-4">
          <label for="newPassword" class="form-label">Новый пароль<span
            class="required">*</span></label>
          <input id="newPassword" type="text" class="form-control" value="234234"
                 name="login">
          <div class="invalid-feedback">
            Login is invalid
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-12">
        <div class="form-group mb-4">
          <label for="confirmPassword" class="form-label">Подтвердить пароль<span
            class="required">*</span></label>
          <input id="confirmPassword" type="text" class="form-control" value="234234"
                 name="login">
          <div class="invalid-feedback">
            Login is invalid
          </div>
        </div>
      </div>

    </div>
    <div class="row justify-content-center">
      <div class="col-xl-4 col-lg-12">
        <button @click="resetPassword" class="btn_primary btn_block">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePasswordForm",
  methods: {
    resetPassword() {
      console.log('resetPassword')
    }
  }
}
</script>

<style scoped>

</style>
