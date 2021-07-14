<template>
  <div>

    <section class="container mobile_block_section d-lg-none">
      <div class="mobile_block d-flex justify-content-center">
        <div class="mobile_block_filter">
          <button class="btn_mobile_filter"><img src="~assets/img/filter.svg" alt="Alt"></button>
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
    <section class="mobile_filter d-none">

      <div class="mobile_filter_modal bg-white">

        <div class="mobile_filter_header">
          <button class="close">Отмена</button>
          <span>Фильтр</span>
          <button>Сбросить</button>
        </div>

        <div class="mobile_filter_body">

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="checkbox_filter_wrap">
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

        </div>

        <div class="mobile_filter_footer">
          <button>Применить</button>
        </div>

      </div>
    </section>


    <section class="container">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 bg-white left-aside s-h filter">


            <Breadcrumbs :crumbs="this.crumbs"/>





            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Поставщики</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="checkbox_filter">
              <div class="checkbox_filter_label">
                <p>Направления</p>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Частник
                  <input class="form-check-input check-input_them" type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

          </div>

          <div class="col-lg-9 col-md-12 bg-white right-aside s-h">
            <div class="content" v-if="response">
              <p class="content_title">{{ response.name }}</p>
              <div v-if="response.list_services">
                <div class="link_container" v-for="item in response.list_services" :key="item.id">
                  <div class="col-12 mb-lg-3 mb-sm-2 mb-2">
                    <NuxtLink class="simple_link" :to="localePath('/catalog/' + item.path)">
                      <div class="card">{{ item.name }}</div>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div v-if="response.list_sub_categories">
                <div class="link_container" v-for="items in response.list_sub_categories" :key="items.id">
                  <div class="col-12 mb-lg-3 mb-sm-2 mb-2">
                    <NuxtLink class="simple_link" :to="localePath('/catalog/' + items.path)">
                      <div class="card">{{ items.name}}</div>
                    </NuxtLink>
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
import Breadcrumbs from "../../../components/Breadcrumbs";
export default {
  name: "index",
  components: {Breadcrumbs},
  data() {
    return {
      crumbs: [],
    }
  },
  layout: 'catalogLayoutService',
  async asyncData({$axios, params, i18n}) {
    const response = await $axios.$get('/api/categories/' + params.category + '?lang=' + i18n.localeProperties.code)
    console.log(response, 'category')
    return {response}
  },
  mounted() {
    this.crumbs = this.$crumbsBuilder(this.response)
  }
}
</script>

<style scoped>

</style>
