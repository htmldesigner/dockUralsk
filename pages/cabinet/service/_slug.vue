<template>
  <div v-if="serviceRequest">
    <div class="row">
      <div class="col-12">
        <p class="h1">{{ serviceRequest.title }}</p>
      </div>
    </div>

    <div class="service_container">

      <form @submit.prevent="onSubmit" ref="serviceForm" enctype="multipart/form-data">
        <section v-for="(request, o) of serviceRequest">

          <div v-for="(sections, idx) in request.sections">

            <div class="divider">
              <div class="arrow-toggler"></div>
            </div>

            <div class="section-title mb-3">
              <p :class="sections.title.tag">{{ sections.title.text }}</p>
            </div>

            <div class="row" v-for="(rows, index) in sections.rows">

              <div :class="row.cssClasses[0]" v-for="(row, q) in rows.fields">

                <FormGenerator @loadMap="loadMap" :row="row"/>

                <div v-if="row.type === 'group'">

                  <div class="row" v-for="(el, idx) in row.items">
                    <div :class="i.cssClasses[0]" v-for="i in el.items">
                      <FormGenerator @loadMap="loadMap" :row="i" :index="idx" :groupName="row.name"
                                     @removeItem="removeItem"/>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <button @click.prevent="addItem(row.items, row.name)" class="btn_primary_small">
                        <img src="~assets/img/add.svg" alt="Alt">
                      </button>
                    </div>
                  </div>

                </div>

              </div>


              <div v-for="(rows) in rows.sections" :class="rows.cssClasses[0]">
                <div v-for="row in rows">
                  <div v-for="el in row">

                    <div :class="row.cssClasses[0]" v-for="(row, q) in el.fields">

                      <FormGenerator @loadMap="loadMap" :row="row"/>

                    </div>

                  </div>
                </div>
              </div>


            </div>


          </div>

        </section>
        <section class="mt-3">
          <div class="row">

            <div class="col-xl-5 col-lg-12">
              <div class="form-group mb-4">
                <div class="form-check form-check_them">
                  <label class="form-check-label check-label_them">Согласен <a class="simple_link" href="#">с условием
                    пользовательского соглашения</a>
                    <input class="form-check-input check-input_them" v-model="agree" type="checkbox" value="">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="col-xl-7 col-lg-12 d-xl-inline-block d-flex justify-content-center">
              <div class="mb-4">
                <button :disabled="!agree" class="btn_primary">Подписать</button>

              </div>
            </div>


          </div>
        </section>
      </form>

    </div>

    <client-only>
      <MapPopup v-if="showMap" @closeMap="closeMap" @onConfirm="onConfirm"/>
    </client-only>
  </div>
</template>

<script>
import MapPopup from "~/components/MapPopup";
import FormGenerator from "~/components/FormGenerator";
import sha256 from 'crypto-js/sha256';

export default {
  loading: true,
  components: {FormGenerator, MapPopup},
  name: "index",
  layout: 'cabinet/serviceRequestLayout',
  computed: {
    serviceRequest() {
      return this.$store.getters["user/getServiceRequest"]
    },

    xmlKey() {
      return this.$store.state.user.key
    }
  },

  watch: {
    xmlKey: {
      handler: function () {
        this.sendKey()
      }
    },
  },

  async fetch() {
    await this.$store.dispatch('user/loadServiceRequest', this.$route.params.slug)
  },

  data() {
    return {
      showMap: false,
      agree: false,
      formElem: null
    }
  },

  methods: {
    addItem(items, groupName) {
      let cloneItems = Object.assign({}, items[0].items)
      delete cloneItems.coordinates

      cloneItems.subtract = {
        "type": "subtract",
        "cssClasses": [
          "col-xl-1 col-lg-1"
        ]
      }

      let el = {
        "cssClasses": [],
        "items": cloneItems,
      }

      this.$store.commit('user/ADD_ITEM_SERVICE_REQUEST', {el, groupName})
    },

    removeItem(value) {
      console.log(value)
      this.$store.commit('user/REMOVE_ITEM_SERVICE_REQUEST', value)
    },

    closeMap() {
      this.showMap = false
    },

    onConfirm(el) {
      console.log(el)
    },

    loadMap() {
      this.showMap = true
    },

    async onSubmit() {
      if (this.agree) {

        this.formElem = new FormData(this.$refs.serviceForm)


        let prepareData = {}

        for (let [name, value] of this.formElem) {
          if (typeof value === "object") {
            if (prepareData.hasOwnProperty(name.replace("[]", ""))) {
              prepareData[name.replace("[]", "")].push({item: sha256(value).toString()})
            } else {
              prepareData[name.replace("[]", "")] = [{item: sha256(value).toString()}]
            }

          } else {
            prepareData[name] = value
          }
        }

        let data = []

        for (let props in prepareData) {
          data.push({[props]: prepareData[props]})
        }


        let xml = []

        for (let i = 0; i < data.length; i++) {
          if (Array.isArray(data[i][Object.keys(data[i]).join('')])) {
            xml.push('<' + Object.keys(data[i]).join('') + '>' + data[i][Object.keys(data[i]).join('')].map(el => {
              return '<items>' + el.item + '</items>'
            }).join('') + '</' + Object.keys(data[i]).join('') + '>')
          } else {
            xml.push('<' + Object.keys(data[i]).join('') + '>' + data[i][Object.keys(data[i]).join('')] + '</' + Object.keys(data[i]).join('') + '>')
          }
        }

        await this.$ncaLayer(xml.join(''))

      }
    },

    async sendKey() {
      if (this.xmlKey) {
        this.formElem.append('xml', this.xmlKey);

        await fetch('/api/case/create', {
          method: 'POST',
          body: this.formElem
        });

        this.$router.push('/cabinet')

      }
    }
  }
}
</script>

<style scoped>

</style>
