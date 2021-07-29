<template>
  <div :class="{'col-lg-12': currentLink === 'Cabinet', 'col-lg-12': currentLink === 'Profile'}"
       class="col-12 bg-white straight s-h">
    <div class="content">

      <component :is="currentComponent" @logOut="logOut">
        <div class="component-selector">
          <ul>
            <li @click="currentLink = 'Cabinet'" :class="{active: currentLink === 'Cabinet'}">
              <div class="component">Обращения</div>
            </li>
            <li @click="currentLink = 'Profile'" :class="{active: currentLink === 'Profile'}">
              <div class="component">Профиль</div>
            </li>
          </ul>
        </div>
      </component>

    </div>
  </div>
</template>

<script>
import Cabinet from "~/components/cabinet/Cabinet";
import Profile from "~/components/cabinet/Profile";

export default {
  components: {Cabinet, Profile},
  name: "index",
  layout: 'cabinet/cabinetLayout',
  computed: {
    currentComponent: function () {
      return this.currentLink
    },
  },

  async fetch({store}) {
    await store.dispatch('user/getServiceRequestsList')
  },

  data() {
    return {
      currentLink: 'Cabinet'
    }
  },
  methods: {
    logOut() {
      this.$auth.logout()
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>

</style>
