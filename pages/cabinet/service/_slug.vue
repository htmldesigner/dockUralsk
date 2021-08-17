<template>
  <div v-if="serviceRequest">
    <div class="row">
      <div class="col-12">
        <p class="h1">{{ serviceRequest.title }}</p>
      </div>
    </div>

    <div class="service_container">
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <form ref="serviceForm" enctype="multipart/form-data">
          <section v-for="(request, o) of serviceRequest">
            <div v-if="request">
              <div v-for="(sections, idx) in request.sections" :class="o +'_'+idx">

                <div class="section-title mb-3" v-if="sections.title">
                  <p :class="sections.title.tag">{{ sections.title.text }}</p>
                </div>

                <div class="row" v-for="(rows, index) in sections.rows">

                  <div :class="row.cssClasses" v-for="(row, q) in rows.fields">

                    <FormGenerator
                      @loadMap="loadMap"
                      :row="row"
                      :index="q"
                      @checkBoxEvent="checkBoxEvent"
                    />

                    <div v-if="row.type === 'group'">
                      <div class="row" v-for="(el, idx) in row.items">
                        <div :class="i.cssClasses" v-for="i in el.items">
                          <FormGenerator
                            @loadMap="loadMap"
                            :row="i"
                            :index="idx"
                            :groupName="row.name"
                            @removeItem="removeItem"
                            @checkBoxEvent="checkBoxEvent"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <button type="button" @click.prevent="addItem(row.items, row.name)" class="btn_primary_small">
                            <img src="~assets/img/add.svg" alt="Alt">
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>

                  <div v-for="(rows) in rows.sections" :class="rows.cssClasses">
                    <div v-for="row in rows">
                      <div v-for="el in row">
                        <div :class="row.cssClasses" v-for="(row, q) in el.fields">
                          <FormGenerator
                            @loadMap="loadMap"
                            :row="row"
                            :index="q"
                            @checkBoxEvent="checkBoxEvent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div class="divider" :class="o +'_'+idx">
                  <div class="arrow-toggler" @click="toggler(o +'_'+idx)"></div>
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
                  <button @click.prevent="onSubmit" type="submit" :disabled="!agree" class="btn_primary">
                    Зарегистрировать
                  </button>
                </div>
              </div>
            </div>
          </section>

        </form>
      </ValidationObserver>
    </div>

    <client-only>
      <keep-alive>
        <MapPopup v-if="showMap" @closeMap="closeMap"/>
      </keep-alive>
    </client-only>

  </div>
</template>

<script>
import MapPopup from "~/components/MapPopup";
import FormGenerator from "~/components/FormGenerator";
import sha256 from 'crypto-js/sha256';
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  loading: true,
  components: {FormGenerator, MapPopup, ValidationProvider, ValidationObserver},
  name: "index",
  layout: 'cabinet/serviceRequestLayout',
  computed: {
    serviceRequest() {
      return this.$store.getters["user/getServiceRequest"]
    },

    getGeoDate() {
      return this.$store.getters['helper/getGeoDate']
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
    // checkValue: {
    //   handler: function (payload) {
    //     return this.$store.commit('user/DISABLED_FIELD', payload)
    //   }
    // }
  },

  async fetch({store, params}) {
    await store.dispatch('user/loadServiceRequest', params.slug)
  },

  data() {
    return {
      showMap: false,
      agree: false,
      formElem: null,
      checkValue: null
    }
  },

  methods: {
    checkBoxEvent(event) {
      this.$store.commit('user/DISABLED_FIELD', event)
    },
    toggler(element) {
      let node = document.querySelector('.' + element)
      if (node) {
        node.childNodes.forEach(el => {

          if (el.className === 'divider' + ' ' + element) {
            if (el.firstChild.classList.contains('active')) {
              el.firstChild.classList.remove('active')
            } else {
              el.firstChild.classList.add('active')
            }
          }
          if (el.className === 'row hidden') {
            return el.classList.remove('hidden')
          }
          if (el.className === 'row') {
            return el.classList.add('hidden')
          }
        })
      }
    },

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
      this.$store.commit('user/REMOVE_ITEM_SERVICE_REQUEST', value)
    },

    closeMap() {
      this.showMap = false
    },

    loadMap() {
      this.showMap = true
    },

    onSubmit() {
      if (this.agree) {
        this.$refs.form.validate().then(success => {
            if (success) {
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
              this.$ncaLayer(xml.join(''))
            } else {
              console.log(this.$refs.form)
              let el = document.querySelector(".is-invalid").parentNode;
              el.scrollIntoView({block: "center", behavior: "smooth"});

            }
          }
        ).catch(error => {

          console.log(error)
        })
      }
    },

    async sendKey() {
      try {
        if (this.xmlKey) {

          this.formElem.append('latlng', this.getGeoDate);

          this.formElem.append('service_id', this.serviceRequest.service_id)

          this.formElem.append('xml', this.xmlKey);

          await this.$axios('/api/case/create', {
            method: 'POST',
            data: this.formElem,
            headers: {"Content-Type": "multipart/form-data"},
          });
          this.$router.push('/cabinet')
        }
      } catch (e) {
        alert('Ошибка отпправки запроса')
      }
    }
  }
}
</script>

<style scoped lang="sass">

</style>
