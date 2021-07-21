<template>
  <div>
    <div class="d-flex justify-content-between mb-4">
      <div class="user">
        <p class="h1">Личный кабинет (физического лица)</p>
        <span class="user-name">Константинопольский К. К.</span><span @click="$emit('logOut')" class="logOut">Выйти</span>
      </div>
    </div>
    <slot></slot>

    <ChangePasswordForm class="mt-5" />

    <hr style="margin-top: 36px">
  </div>
</template>

<script>
import ChangePasswordForm from "~/components/cabinet/ChangePasswordForm";
export default {
  components: {ChangePasswordForm},
  name: "Profile"
}
</script>

<style scoped>

</style>
