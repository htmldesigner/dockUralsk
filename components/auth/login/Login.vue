<template>

  <div class="modal-backdrop">

    <div class="form-card">
      <div class="form-body">
        <div class="form-title">
          <p>Авторизация</p>
          <a href="#" class="btn_close" @click.prevent="$emit('close')"></a>
        </div>

        <div class="component-selector">
          <ul>
            <li @click="currentLink = 'IpcForm'" :class="{active: currentLink === 'IpcForm'}">
              <div class="component">по ЭЦП</div>
            </li>
            <li @click="currentLink = 'LoginForm'" :class="{active: currentLink === 'LoginForm'}">
              <div class="component">по логину и паролю</div>
            </li>
          </ul>
        </div>

        <component :is="currentComponent" @close="$emit('close')"></component>

      </div>
    </div>

  </div>
</template>

<script>
import LoginForm from "@/components/auth/login/LoginForm";
import IpcForm from "@/components/auth/login/IpcForm";

export default {
  components: {LoginForm, IpcForm},
  name: "Login",
  computed: {
    currentComponent: function () {
      return this.currentLink
    },
  },
  data() {
    return {
      ipc: false,
      login: true,
      currentLink: 'IpcForm'
    }
  }
}
</script>

<style scoped>

</style>
