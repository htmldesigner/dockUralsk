<template>
  <div>
    <div class="d-flex justify-content-between mb-4">
      <div class="user">
        <p class="h1">Личный кабинет</p>
        <span class="user-name">{{user.full}}</span>
        <span @click="$emit('logOut')" class="logOut">Выйти</span>
      </div>
    </div>
    <slot></slot>

    <ChangePasswordForm class="mt-5"/>

    <hr style="margin-top: 36px">
  </div>
</template>

<script>
import ChangePasswordForm from "~/components/cabinet/ChangePasswordForm";

export default {
  components: {ChangePasswordForm},
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  name: "Profile"
}
</script>

<style scoped>

</style>
