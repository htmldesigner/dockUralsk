<template>
  <div>
    <section class="container mobile_block_section d-lg-none">

      <div class="mobile_block d-flex justify-content-between">
        <button
          @click="showRequisites = !showRequisites"
          class="btn_outline requisites-popup">{{ $t('buttons.requisites') }}
        </button>

        <NuxtLink v-if="isLoggedIn" class="btn_primary" :to="localePath('/cabinet/service/' + response.slug, )">
          {{ $t('buttons.get_service') }}
        </NuxtLink>
        <button v-else @click="emitLoginForm" class="btn_primary">{{ $t('buttons.get_service') }}</button>

      </div>

    </section>

    <!--Фильтер в моб версии-->
    <section class="mobile_popup" v-if="showRequisites">
      <RequisitesPopup :values="response.requisites" @close="close"/>
    </section>

    <section class="container">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 bg-white left-aside s-h filter">
            <div class="requisites">
              <div class="requisites_label">
                <p>{{ $t('requisites') }}</p>
              </div>
              <div class="requisites_list">
                <ul v-if="response.requisites">
                  <li v-for="item of response.requisites">
                    <p class="requisites_name">{{ item.title }}</p>
                    <p class="requisites_content">{{ item.text }}</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div class="col-lg-9 col-md-12 bg-white right-aside s-h">
            <div class="content">
              <div class="row">

                <div class="col-lg-8 col-12" v-if="response">
                  <p class="content_title h1">{{ response.name }}</p>
                </div>

                <div class="col-4 d-lg-block d-none text-end">
                  <NuxtLink
                    v-if="isLoggedIn"
                    :class="{ disabled: getRecipientId}"
                    class="btn_primary"
                    :to="localePath('/cabinet/service/' + response.slug, )"
                  >
                    {{ $t('buttons.get_service') }}
                  </NuxtLink>
                  <button v-else @click="emitLoginForm(localePath('/cabinet/service/' + response.slug, ))"
                          class="btn_primary">{{ $t('buttons.get_service') }}
                  </button>
                </div>
              </div>

              <div class="service_container">

                <div class="opening_card">
                  <div class="opening_card_header d-flex justify-content-between align-items-center"
                       @click="open = !open">
                    <div v-html="response.service_documents"></div>
                    <div class="toggler" :class="{'open': !open}">
                      <img src="~assets/img/arrow.svg" alt="Alt">
                    </div>
                  </div>
                  <div class="opening_card_body" :class="{'hide': open}">
                    <div v-html="response.confidant_documents"></div>
                  </div>
                </div>

                <div v-if="response.instruction">
                  <a class="simple_link"
                     style="text-decoration: underline"
                     :href="response.instruction.path"
                     download TARGET="_blank"
                  >
                    {{ $t('instruction') }}
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RequisitesPopup from "../../../../components/mobileComponents/RequisitesPopup";

export default {
  components: {
    RequisitesPopup
  },
  computed: {
    getRecipientId() {
      if (+this.response.recipient_id === 2 && this.userType === 1) {
        return false
      }
      if (+this.response.recipient_id === 1 && this.userType === 0) {
        return false
      }
      return true
    },
    isLoggedIn() {
      return this.$store.state.auth.loggedIn
    },
    userType() {
      return this.$store.state.auth.user.type
    }
  },
  name: "slug",
  layout: 'catalogLayoutService',
  async asyncData({$axios, params, i18n}) {
    const response = await $axios.$get('/api/services/' + `${encodeURIComponent(params.slug)}` + '?lang=' + i18n.localeProperties.code)
    return {response}
  },
  data() {
    return {
      open: true,
      showRequisites: false
    }
  },
  methods: {
    close() {
      this.showRequisites = false
    },
    emitLoginForm(path) {
      this.$nuxt.$emit('showLoginForm')
      if (path) {
        this.$store.commit('helper/SET_GO_TO_URL', path)
      }
    }
  }
}
</script>

<style scoped>
.toggler img {
  transition: .25s ease;
  transform: rotate(0deg);
}

.toggler.open img {
  transition: .25s ease;
  transform: rotate(90deg);
}
</style>
