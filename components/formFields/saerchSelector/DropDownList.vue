<template>

  <div>
    <div class="searchInput">

      <input type="text" class="searchInput_Input" v-model="searchValue">

      <button type="button" class="search_icon" v-if="searchValue.length < 1">
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4249 16.3951L13.1409 11.9395C14.2424 10.6301 14.8459 8.98262 14.8459 7.26749C14.8459 3.26026 11.5857 0 7.57842 0C3.57119 0 0.310928 3.26026 0.310928 7.26749C0.310928 11.2747 3.57119 14.535 7.57842 14.535C9.08279 14.535 10.5164 14.0812 11.7421 13.2199L16.0586 17.7093C16.2391 17.8967 16.4817 18 16.7418 18C16.9879 18 17.2214 17.9062 17.3987 17.7355C17.7753 17.3731 17.7874 16.7721 17.4249 16.3951ZM7.57842 1.89587C10.5404 1.89587 12.95 4.30552 12.95 7.26749C12.95 10.2295 10.5404 12.6391 7.57842 12.6391C4.61644 12.6391 2.2068 10.2295 2.2068 7.26749C2.2068 4.30552 4.61644 1.89587 7.57842 1.89587Z"
          />
        </svg>
      </button>

      <button type="button" class="remove_search_icon" v-else @click="searchValue = ''">
        <svg width="18" height="18" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </button>

    </div>

    <ul class="optionList" v-for="option in options" :key="option.id">
      <li @click="selectedOptions(option)"><span>{{ option.text }}</span></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "DropDownList",
  computed: {
    options() {
      if (this.searchValue.length) {
        return this.row.options.filter(el => {
          return el.text.toLowerCase().includes(this.searchValue.toLowerCase())
        })
      } else {
        return this.row.options
      }
    }
  },
  props: ['row'],
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    selectedOptions(option) {
      let selected = {
        found: option.text,
        targetId: option.id,
        showDropDownList: false
      }
      this.$emit('selected', selected)
    },
  }
}
</script>

<style scoped lang="sass">
.dropDownList
  position: absolute
  z-index: 100
  width: 100%
  background-color: #fff
  border: 1px solid #DFDFDF
  padding: 5px 5px 7px 5px
  border-radius: 6px
  margin-top: 4px
  box-shadow: 1px 2px 6px rgb(32 33 36 / 18%)
  overflow-y: scroll
  max-height: 360px

  .searchInput
    position: relative
    margin:
      top: 5px
      bottom: 10px
      left: 5px
      right: 5px

    .searchInput_Input
      border-radius: 6px
      font-family: "Montserrat-Regular", sans-serif
      font-size: 15px
      border: 1px solid #DFDFDF
      padding: 8px 0 8px 15px
      max-height: 40px
      width: 100%
      transition: 0.25s ease-out

      &:focus
        background: #fff
        outline: 0
        box-shadow: 0 2px 6px rgb(32 33 36 / 12%)

    button
      position: absolute
      right: 13px
      top: 7px
      border: 0
      padding: 0
      margin: 0
      outline: none
      background-color: transparent
      cursor: pointer

      svg
        fill: #AAAEB0
        transition: .25s

      &.remove_search_icon
        cursor: pointer

        &:hover
          svg
            fill: darken(#AAAEB0, 10%)

.optionList
  padding: 0 0 0 10px
  margin: 0

  li
    list-style: none
    cursor: pointer
    margin: 3px 0

    span
      font-size: 16px
      font-family: "Montserrat-Regular", sans-serif
      color: #39A9CB
</style>
