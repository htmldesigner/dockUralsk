<template>
  <div>
    <header>
      <section class="container mb-5">
        <div class="row ">

          <div class="col-md-12 d-flex justify-content-end">

            <div class="header_index_layout">

              <LanguageSwitcher/>

              <div class="header_auth">
                <ul v-if="!isLoggedIn">
                  <li><a href="#" @click.prevent="login">{{ $t('buttons.enter') }}</a></li>
                  <li><a href="#" @click.prevent="registration">{{ $t('buttons.registration') }}</a></li>
                </ul>

                <ul v-else>
                  <li>
                    <NuxtLink :to="localePath('/cabinet')">{{ IIN_BIN_Checker }}</NuxtLink>
                  </li>
                  <li><a href="#" @click.prevent="logOut">{{ $t('buttons.exit') }}</a></li>
                </ul>

              </div>
            </div>

          </div>

        </div>
      </section>

      <Registration v-if="registrationModal" @close="close"/>
      <Login v-if="loginModal" @close="close"/>

    </header>

    <section class="container">
      <div class="row py-lg-4">
        <div class="search_section">

          <div class="search_section_logo">
            <NuxtLink style="cursor: pointer" custom v-slot="{ navigate }"
                      :to="localePath('/')">
              <div @click="navigate" role="link">
                <Logo
                  :text_index_size="'23px'"
                  :text_description_size="'18px'"
                  :logo_img_margin="'10px'"
                  :logo_height="'51px'"
                />
              </div>
            </NuxtLink>
          </div>

          <NuxtLink :to="localePath('/catalog')" class="btn_outline">{{ $t('buttons.open_catalog') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section_service container mt-lg-5 mt-4" v-for="data in response">
      <div class="row">

        <div class="section_service_label mb-lg-4 mb-3">
          <p class="h5">{{ data.name }}</p>
          <div class="section_service_label_line"></div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-12 mb-lg-4 mb-sm-2 mb-2" v-for="service in data.list_services">

          <NuxtLink :to="localePath(`/catalog/${service.path}`)">
            <div class="card">{{ service.name }}</div>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher";
import Login from "@/components/auth/login/Login";
import Registration from "@/components/auth/Registration";
import Logo from "../components/Logo";

export default {
  name: "index",
  components: {Logo, LanguageSwitcher, Login, Registration},
  async asyncData({$axios, i18n, $auth, store}) {
    // $auth.strategy.token.reset()
    const response = await $axios.$get('/api/recipients?lang=' + i18n.localeProperties.code)
    store.commit('user/ADD_SERVICE', response)
    return {response}
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.loggedIn
    },
    IIN_BIN_Checker() {
      if (this.$store.state.auth.user.bin) {
        return this.$store.state.auth.user.bin
      } else {
        return this.$store.state.auth.user.iin
      }
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
    logOut() {
      this.$auth.logout()
      this.$store.commit('user/SET_KEY', null)
      this.$router.push('/')
    },
    registration() {
      this.registrationModal = true
    },
    close() {
      this.loginModal = this.registrationModal = false
    }
  },
  mounted() {
    this.$nuxt.$on('showRegistrationForm', () => {
      this.close()
      this.registration()
    })
  },


}
</script>
