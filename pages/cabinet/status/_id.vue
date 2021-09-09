<template>

  <section class="container">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 bg-white left-aside s-h filter d-none">
          <div class="requisites">
            <div class="requisites_label">
              <p>{{ $t('requisites') }}</p>
            </div>
            <div class="requisites_list">
              <ul v-if="cases.requisits">
                <li v-for="item of cases.requisits">
                  <p class="requisites_name">{{ item.title }}</p>
                  <p class="requisites_content">{{ item.value }}</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="col-lg-9 col-md-12 bg-white straight s-h">
          <div class="content">
            <div class="row">

              <div class="col-12">
                <p class="content_title h1">{{ cases.title }}</p>
              </div>
            </div>

            <div class="request-result">
              <div class="request-result_container" v-for="el in cases.form">
                <p class="request-result_title" v-html="el.title"></p>
                <p class="request-result_value">{{ el.value }}</p>

                <div v-if="el.values">
                  <a class="simple_link" v-for="link in el.values" :href="link.link">{{ link.text }}</a>
                </div>


              </div>
            </div>

          </div>
        </div>


        <div class="col-lg-3 bg-white s-h right">

          <a v-if="cases.document_link" target="_blank" :href="cases.document_link" class="btn_primary btn_block">Скачать
            PDF</a>
          <a v-if="cases.reject_comment" @click.prevent.stop="showModal" href="#" class="btn_primary btn_block danger">Причина
            отказа</a>

          <div class="status-block">
            <div class="request">
              <span>№ Заявки</span>
              <span>{{ cases.number }}</span>
            </div>
            <hr>
            <div class="status">
              <span>Статус</span>
              <span class="yellow">{{ cases.status }}</span>
            </div>
          </div>

          <div class="time-line">
            <div class="steps">
              <ul>
                <li
                  :class="{colorize: step.color !== '#8B8B8B'}"
                  :style="{'--bgColor': step.color}"
                  v-for="(step, idx) in  steps" :key="idx"
                >
                  <div class="marker" :style="{backgroundColor: step.color}"></div>
                  <div class="text-status">
                    <span class="message">{{ step.title }}</span>
                    <span class="status">{{ step.description }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>


      </div>
    </div>


    <ModalWindow v-if="show" @closeModal="show = !show">
      <div v-html="cases.reject_comment"></div>
    </ModalWindow>

  </section>

</template>

<script>
import ModalWindow from "../../../components/ModalWindow";

export default {
  name: "id",
  layout: 'cabinet/statusLayout',
  components: {ModalWindow},
  data() {
    return {
      show: false
    }
  },
  computed: {
    cases() {
      return this.$store.getters['user/getServiceCases']
    },
    steps() {
      return this.$store.getters['user/getServiceSteps']
    }
  },

  async fetch({store, params, app}) {
    let locale = app.i18n.localeProperties.code
    await store.dispatch('user/getServiceStatus', {id: params.id, locale})
  },

  methods: {
    showModal() {
      this.show = !this.show
    }
  }

}
</script>

<style scoped lang="sass">

.steps
  margin-top: 46px

  ul
    margin: 0
    padding: 0

    li
      &.colorize
        &:after
          border-left: 3px solid var(--bgColor)
          left: 6px


</style>
