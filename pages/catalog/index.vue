<template>
  <div>

    <section class="container mobile_block_section d-lg-none">
      <div class="mobile_block d-flex justify-content-center">

        <div class="mobile_block_filter">
          <button class="btn_mobile_filter" @click="showFilter = !showFilter">
            <img src="~assets/img/filter.svg" alt="Alt">
          </button>
        </div>

        <div class="mobile_block_search flex-grow-1">
          <input type="text" class="input_mobile_theme" placeholder="Введите наименование">
          <button>
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4249 16.3951L13.1409 11.9395C14.2424 10.6301 14.8459 8.98262 14.8459 7.26749C14.8459 3.26026 11.5857 0 7.57842 0C3.57119 0 0.310928 3.26026 0.310928 7.26749C0.310928 11.2747 3.57119 14.535 7.57842 14.535C9.08279 14.535 10.5164 14.0812 11.7421 13.2199L16.0586 17.7093C16.2391 17.8967 16.4817 18 16.7418 18C16.9879 18 17.2214 17.9062 17.3987 17.7355C17.7753 17.3731 17.7874 16.7721 17.4249 16.3951ZM7.57842 1.89587C10.5404 1.89587 12.95 4.30552 12.95 7.26749C12.95 10.2295 10.5404 12.6391 7.57842 12.6391C4.61644 12.6391 2.2068 10.2295 2.2068 7.26749C2.2068 4.30552 4.61644 1.89587 7.57842 1.89587Z"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>

    <!--Фильтер в моб версии-->
    <section class="mobile_filter" v-if="showFilter">
      <FilterPopup
        @close="close"
        @reset="resetFilter"
        @apply="applyFilter"
        :filters="response.filters"
      />
    </section>

    <section class="container">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 bg-white left-aside s-h filter" v-if="response.filters">

            <div class="checkbox_filter" v-for="(value, idx) of response.filters" :key="idx">
              <div v-if="value.organization">
                <div class="checkbox_filter_label">
                  <p>{{ value.organization.title }}</p>
                </div>
                <div class="form-check form-check_them" v-for="option of value.organization.options" :key="option.id">
                  <label class="form-check-label check-label_them">{{ option.title }}
                    <input
                      class="form-check-input check-input_them"
                      type="checkbox"
                      :value="option.id"
                      v-model="organization"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <div v-if="value.recipient">
                <div class="checkbox_filter_label">
                  <p>{{ value.recipient.title }}</p>
                </div>
                <div class="form-check form-check_them" v-for="option of value.recipient.options" :key="option.id">
                  <label class="form-check-label check-label_them">{{ option.title }}
                    <input
                      class="form-check-input check-input_them"
                      type="checkbox"
                      :value="option.id"
                      v-model="recipient"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

            </div>


          </div>

          <div class="col-lg-9 col-md-12 bg-white right-aside s-h">
            <div class="content">
              <p class="h1">Все категории</p>
              <div v-for="(category, index) in values" :key="index">
                <div class="items_container">
                  <div class="content_items" v-if="category.list_sub_categories.length">
                    <!--Назваеие катекгории-->
                    <NuxtLink
                      :to="localePath(`/catalog/${category.slug_}`)"
                      class="content_items_title"
                    >{{ category.name }}
                    </NuxtLink>

                    <div class="row content_items_content" v-if="category.list_sub_categories">

                      <div class="col-md-6 item" v-for="subCategory in category.list_sub_categories">

                        <!--Назваеие SUB катекгории-->
                        <NuxtLink v-if="subCategory.list_services.length"
                                  :to="localePath(`/catalog/${subCategory.path}`)"
                                  class="content_items_subtitle">{{ subCategory.name }}
                        </NuxtLink>


                        <!--Список-->
                        <ul v-for="list in subCategory.list_services">
                          <li>
                            <NuxtLink :to="localePath(`/catalog/${list.path}`)">
                              {{ list.name }}
                            </NuxtLink>
                          </li>
                        </ul>


                      </div>

                    </div>
                  </div>
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
import FilterPopup from "../../components/mobileComponents/FilterPopup";

export default {
  components: {
    FilterPopup
  },
  name: "index",
  layout: 'catalogLayout',

  computed: {
    values(el) {
      return this.first(this.response.list_categories)
    }
  },

  data() {
    return {
      recipient: [],
      organization: [],
      showFilter: false
    }
  },

  methods: {

    first(response) {
      return response.map(category => ({
          id: category.id,
          list_services: category.list_services,
          list_sub_categories: this.ffl(category.list_sub_categories),
          name: category.name,
          path: category.path,
          slug_: category.slug_
        })
      )
    },

    ffl(list_sub_categories) {
      let result = null
      if (list_sub_categories.length) {
        result = list_sub_categories.map(el => ({
          id: el.id,
          list_services: el.list_services.filter(z => {
            if (this.organization.length && !this.recipient.length) {
              return this.organization.includes(z.organization.id)
            }
            if (this.organization.length && this.recipient.length) {
              return this.organization.includes(z.organization.id) && this.recipient.includes(z.recipient.id)
            }
            if (this.recipient.length) {
              return this.recipient.includes(z.recipient.id)
            } else {
              return z
            }
          }),
          name: el.name,
          path: el.path,
          slug_: el.slug_
        })).filter(el => {
          return el.list_services.length
        })
      }
      return result
    },

    close() {
      this.showFilter = false
    },
    resetFilter() {
      this.recipient = []
      this.organization = []
    },
    applyFilter(payload) {
      this.recipient = payload.recipient
      this.organization = payload.organization
    }
  },

  async asyncData({$axios, i18n, app}) {
    const response = await $axios.$get('/api/categories?lang=' + i18n.localeProperties.code)
    console.log(response, 'catalog')
    return {response}
  }
}
</script>

<style>

</style>
