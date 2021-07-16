<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group mb-3">
      <label for="login" class="form-label">БИН/ИНН</label>
      <input id="login" type="text" placeholder="Ваш БИН/ИНН" v-model.trim="user.login" class="form-control" name="login">
      <div class="invalid-feedback">
        Login is invalid
      </div>
    </div>

    <div class="form-group mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input id="password" type="password" v-model.trim="user.password" class="form-control" name="password">
      <div class="invalid-feedback">
        Пароль is invalid
      </div>
    </div>

    <div class="form-group" style="margin-top: 36px ">
      <button type="submit" class="btn_primary btn_block">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
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
          let response = await this.$auth.loginWith('local', {data: this.user})
          if (response.status === 200) {
            this.$emit('close')
          }
        }
      } catch (e) {
        alert(e.response.data.error)
      }

    }
  }
}
</script>

<style scoped>

</style>
