<template>

  <div class="modal-backdrop">

    <div class="form-card">
      <div class="form-body">
        <div class="form-title">
          <p>Авторизация</p>
          <a href="#" class="close" @click.prevent="$emit('close')"></a>
        </div>

        <div class="component-selector">
          <ul>
            <li @click="currentLink = 'IpcForm'" :class="{active: currentLink === 'IpcForm'}">
              <div class="component">по ЭЦП</div>
            </li>
            <li @click="currentLink = 'FormLogin'" :class="{active: currentLink === 'FormLogin'}">
              <div class="component">по логину и паролю</div>
            </li>
          </ul>
        </div>

        <component :is="currentComponent"></component>

      </div>
    </div>

  </div>
</template>

<script>
import FormLogin from "./FormLogin";
import IpcForm from "./IpcForm";

export default {
  components: {FormLogin, IpcForm},
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
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}




</style>
