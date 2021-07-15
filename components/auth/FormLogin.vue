<template>
  <form>
    <div class="form-group mb-3">
      <label for="login" class="form-label">Логин</label>
      <input id="login" type="text" class="form-control" name="login">
      <div class="invalid-feedback">
        Login is invalid
      </div>
    </div>

    <div class="form-group mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input id="password" type="password" class="form-control" name="password">
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
  name: "FormLogin"
}
</script>

<style scoped>

</style>
