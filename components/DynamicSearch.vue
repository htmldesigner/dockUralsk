<template>
  <div class="dynamic_filter">
    <div class="header_search">
      <input
        v-model.trim="keyword"
        type="text"
        class="header_search_input_theme"
        placeholder="Найти услугу"
        :class="{includes: elements.length}"
        @click="loadServiceForFilter"
      >
      <button class="search_icon" v-if="keyword.length < 4">
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4249 16.3951L13.1409 11.9395C14.2424 10.6301 14.8459 8.98262 14.8459 7.26749C14.8459 3.26026 11.5857 0 7.57842 0C3.57119 0 0.310928 3.26026 0.310928 7.26749C0.310928 11.2747 3.57119 14.535 7.57842 14.535C9.08279 14.535 10.5164 14.0812 11.7421 13.2199L16.0586 17.7093C16.2391 17.8967 16.4817 18 16.7418 18C16.9879 18 17.2214 17.9062 17.3987 17.7355C17.7753 17.3731 17.7874 16.7721 17.4249 16.3951ZM7.57842 1.89587C10.5404 1.89587 12.95 4.30552 12.95 7.26749C12.95 10.2295 10.5404 12.6391 7.57842 12.6391C4.61644 12.6391 2.2068 10.2295 2.2068 7.26749C2.2068 4.30552 4.61644 1.89587 7.57842 1.89587Z"
          />
        </svg>
      </button>
      <button class="remove_search_icon" v-else @click="keyword = ''">
        <svg width="18" height="18" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </button>
    </div>

    <div class="header_search_options" :class="{optionsIsOpen: elements}" v-if="elements.length">
      <div class="header_search_line"></div>
      <ul>
        <li v-for="element of elements" :key="element.id" @click="optionsIsOpen().style.display = 'none'; keyword = ''">
          <a href="#" @click.prevent="goTo(element.link)" v-html="element.name"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "DynamicSearch",
  computed: {
    variants() {
      return this.$store.getters["user/getServiceList"]
    },
    elements() {
      if (this.keyword.length > 3 && this.variants?.length) {
        return this.variants.filter(el => {
          return el.name.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
        }).map(t => ({
          id: t.id,
          name: this.color(t.name),
          link: t.path
        }))
      } else {
        return false
      }
    }
  },
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    goTo(url) {
      let path = ''
      if(this.$i18n.localeProperties.code === 'ru'){
        path = `/${this.$i18n.localeProperties.code}` + '/catalog/' + url
      }else {
        path = '/catalog/' + url
      }
     return this.$router.push(path)
    },
    color(str) {
      let re = new RegExp(this.keyword, 'gi')
      return str.replace(re, "<b>" + this.keyword + "</b>")
    },
    loadServiceForFilter() {
     this.$store.dispatch('user/loadServiceList', this.$i18n.localeProperties.code)
    },
    optionsIsOpen() {
      let isOpen = document.querySelector('.optionsIsOpen')
      if (isOpen) {
        return isOpen
      } else {
        return false
      }
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.optionsIsOpen') && !event.target.closest('.header_search')) {
        if (this.optionsIsOpen()) {
          this.optionsIsOpen().style.display = 'none'
          // this.variants = null
        }
      }
    })
  }
}
</script>

<style scoped lang="sass">

.dynamic_filter
  position: relative

  .header_search
    height: 100%
    display: flex
    align-items: center
    position: relative

    button
      position: absolute
      right: 13px
      border: 0
      padding: 0
      margin: 0
      outline: none
      background-color: transparent
      cursor: auto

      svg
        fill: #AAAEB0
        transition: .25s

      &.remove_search_icon
        cursor: pointer

        &:hover
          svg
            fill: darken(#AAAEB0, 10%)

    .header_search_input_theme
      border-radius: 6px
      font-family: 'Montserrat-Regular', sans-serif
      font-size: 15px
      background: #F2F2F2
      border: 1px solid #F2F2F2
      padding: 8px 0px 8px 15px
      max-height: 40px
      width: 100%
      transition: .25s ease-out

      &.includes
        box-shadow: 0 2px 6px rgb(32 33 36 / 18%)
        border-bottom-left-radius: 0
        border-bottom-right-radius: 0

      &:focus
        background: #fff
        outline: 0
        box-shadow: 0 2px 6px rgb(32 33 36 / 18%)


.header_search_line
  border-top: 1px solid #e0e0e0
  margin: 0 20px 0 20px
  padding-bottom: 3px

.header_search_options
  width: 100%
  height: auto
  background: #fff
  position: absolute
  padding: 0 0px 15px 0px
  border-radius: 0 0 6px 6px
  box-shadow: 0 4px 6px rgb(32 33 36 / 18%)
  margin-top: -1px
  z-index: 100

  ul
    padding: 0
    margin: 0

    li
      list-style: none
      margin-top: 5px
      padding: 0px 15px
      transition: .25s

      &:hover
        background-color: #f5f5f5

      a
        text-decoration: none
        font-size: 14px
        font-family: "Montserrat-Regular", sans-serif
        color: #4B4B4B

        &:hover
          text-decoration: underline
</style>
