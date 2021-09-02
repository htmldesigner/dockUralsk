<template>
  <div class="searchSelectorWrap">
{{index}}
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations.includes('required')" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>

    <ValidationProvider :rules="{'required': !row.disabled}" ref="provider" v-slot="{ errors }">

    <div class="searchSelector form-control"
         :class="{'disabled': row.disabled, 'is-invalid': errors[0]}"
         @click.prevent="showDropDown">

      <span>{{ found }}</span>

      <div v-if="found">
        <button type="button" class="remove_search_icon" @click.stop="clearSearch">
          <svg width="18" height="18" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>

      <div class="arrow-toggler" :class="{'active': showDropDownList}">
        <svg width="10" height="5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.99998 7C5.78492 7 5.56988 6.91597 5.40591 6.74825L0.24617 1.46804C-0.0820567 1.13215 -0.0820567 0.587565 0.24617 0.251814C0.574264 -0.0839379 1.10632 -0.0839379 1.43458 0.251814L5.99998 4.92404L10.5654 0.251977C10.8936 -0.0837747 11.4256 -0.0837747 11.7537 0.251977C12.0821 0.587728 12.0821 1.13231 11.7537 1.4682L6.59405 6.74842C6.43 6.91616 6.21496 7 5.99998 7Z"
            fill=""/>
        </svg>
      </div>

    </div>

    <keep-alive>
      <DropDownList
        :row="row"
        @selected="addSelected"
        class="dropDownList"
        v-if="showDropDownList"
      />
    </keep-alive>


      <input type="hidden"
             :name="row.name"
             :disabled="row.disabled"
             v-model="targetId"
             :class="{'is-invalid': errors[0]}"
      >

      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>

  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import DropDownList from "./DropDownList";

export default {
  name: "SearchSelector",
  components: {DropDownList, ValidationProvider, ValidationObserver,},
  props: ['row', 'index'],

  data() {
    return {
      showDropDownList: false,
      found: '',
      targetId: '',
      validateDesignation: false
    }
  },
  methods: {
    showDropDown() {
      this.showDropDownList = !this.showDropDownList
      this.validateField()
    },
    addSelected(payload) {
      this.found = payload.found
      this.targetId = payload.targetId
      this.showDropDownList = payload.showDropDownList
    },

    clearSearch() {
      this.found = ''
      this.targetId = ''
      this.showDropDownList = false
    },
    validateField() {
      let checkField = this.$refs.provider.validate()
      checkField.then(result => {
        if(result.valid){
          return this.validateDesignation = false
        }else {
          return this.validateDesignation = true
        }
      }).catch(e => {
        throw e
      })
    }
  },
  mounted() {
    let target = document.querySelector('body')
    target.addEventListener('click', (event) => {
      if (!event.target.closest('.searchSelectorWrap')) {
        this.showDropDownList = false
      }
    })
  }
}
</script>

<style scoped lang="sass">
.searchSelectorWrap
  position: relative

.searchSelector
  width: 100%
  height: 44px
  cursor: pointer
  display: flex
  align-items: center

  .arrow-toggler
    position: absolute
    right: 11px

    svg
      fill: #39A9CB
      transition: .25s

    &.active
      transform: rotate(180deg)

  .remove_search_icon
    position: absolute
    right: 40px
    bottom: 0
    top: 30px
    border: 0
    padding: 0
    margin: 0
    outline: none
    background-color: transparent
    cursor: pointer

    svg
      fill: #AAAEB0
      transition: .25s

  &.disabled
    pointer-events: none
    opacity: 0.65
    background: #F2F2F2
    border-color: #F2F2F2
    color: #969696

    svg
      fill: #000


</style>






































