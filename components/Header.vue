<template>
  <header class="header">

    <div class="container">
      <div class="row d-flex justify-content-md-between">

        <div class="col-lg-3 col-md-4 col-7">
          <div class="logo">
            <NuxtLink
              :to="localePath('/')">
              <img class="img-responsive" src="~assets/img/logo_1.svg" alt="Alt">
            </NuxtLink>
          </div>
        </div>

        <div class="col-md-5 col-sm-12 d-lg-block d-none">
          <DynamicSearch/>
        </div>

        <div class="col-lg-4 col-md-6 col-5 d-flex  justify-content-end align-items-center">
          <NuxtLink
            class="simple_link category_link me-1 d-md-none d-block"
            :to="localePath('/catalog')">
            {{ $t('buttons.catalog') }}
          </NuxtLink>
          <LanguageSwitcher/>
          <div class="header_auth d-md-block d-none">

            <ul v-if="!isLoggedIn">
              <li><a href="#" @click.prevent="login">{{ $t('buttons.enter') }}</a></li>
              <li><a href="#" @click.prevent="registration">{{ $t('buttons.registration') }}</a></li>
            </ul>

            <ul v-else>
              <li><a href="#">Кабиет</a></li>
              <li><a href="#">Выход</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>

      <Registration v-if="registrationModal" @close="close"/>
      <Login v-if="loginModal" @close="close"/>
  </header>
</template>

<script>
import Login from "./auth/login/Login";
import Registration from "./auth/Registration";
import LanguageSwitcher from "./LanguageSwitcher";
import DynamicSearch from "@/components/DynamicSearch";

export default {
  name: "Header",
  components: {LanguageSwitcher, DynamicSearch, Login, Registration},
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.user
    }
  },
  data() {
    return {
      loginModal: false,
      registrationModal: false
    }
  },
  methods: {
    login() {
      this.loginModal = true
    },
    registration() {
      this.registrationModal = true
    },
    close() {
      this.loginModal = this.registrationModal = false
    }
  },
  mounted() {
    this.$nuxt.$on('test', () => {
      'test eventBuss'
    })
  }
}
</script>

<style scoped>

</style>
