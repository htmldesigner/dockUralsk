<template>

  <div class="modal-backdrop">

    <div class="form-card">

      <div class="form-body">

        <div v-show="!load">
          <div class="form-title">
            <p>{{ $t('authorization') }}</p>
            <a href="#" class="btn_close" @click.prevent="$emit('close')"></a>
          </div>

          <div class="component-selector">
            <ul>
              <li @click="currentLink = 'IpcForm'" :class="{active: currentLink === 'IpcForm'}">
                <div class="component">{{ $t('by_EDS') }}</div>
              </li>
              <li @click="currentLink = 'LoginForm'" :class="{active: currentLink === 'LoginForm'}">
                <div class="component">{{ $t('by_login_password') }}</div>
              </li>
            </ul>
          </div>

          <component :is="currentComponent" @close="$emit('close')"></component>
        </div>

        <div class="d-flex justify-content-center align-items-center" v-if="load">
          <Spiner/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/login/LoginForm";
import IpcForm from "@/components/auth/login/IpcForm";
import Spiner from "@/components/Spiner";

export default {
  components: {LoginForm, IpcForm, Spiner},
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
      currentLink: 'IpcForm',
      load: false
    }
  },
  mounted() {
    this.$nuxt.$on('loader', (value) => {
      this.load = value
    })
  }
}
</script>

<style scoped>

</style>
