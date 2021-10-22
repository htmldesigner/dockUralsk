<template>
  <div class="col-md-4">
    <div class="kato_dinamic_search">
      <label v-if="label" for="kato_street" class="form-label">{{ label }}</label>
      <input
        @input="emitValue($event)"
        id="kato_street"
        class="form-control kato_field"
        type="text"
        v-model="candidate"
        @click="showOptions = true"
        autocomplete="nope"
      >

      <div class="kato_dinamic_options" v-if="list.length && showOptions">
        <ul>
          <li v-for="item of list" :key="item.id">
            <span v-if="item['name_' + $i18n.localeProperties.code]"
                  @click.prevent.stop="setStreet(item)">{{ item["name_" + $i18n.localeProperties.code] }}</span>
            <span v-if="item.housename" @click.prevent.stop="setHouse(item)">{{ item.housename }}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "KatoInput",
  props: {
    label: {
      type: String
    },
    list: {
      type: Array
    }
  },
  data() {
    return {
      candidate: '',
      showOptions: false
    }
  },
  methods: {
    clear(){
      console.log('clear')
      this.candidate  = ''
    },
    emitValue(event) {
      this.$emit('candidate', event.target.value)
    },

    setStreet(value) {
      this.candidate = value["name_" + this.$i18n.localeProperties.code]
      this.$emit('target', value)
      this.$store.commit('kato/SET_KATO_STREETS', [])
      this.showOptions = false
    },

    setHouse(value) {
      this.candidate = value.housename
      this.$emit('target', value)
      this.$store.commit('kato/SET_KATO_STREETS', [])
      this.showOptions = false
    },

  },
  mounted() {
    let target = document.querySelector('body')
    target.addEventListener('click', (event) => {
      if (!event.target.closest('.kato_field')) {
        this.showOptions = false
      }
    })
  }
}
</script>

<style scoped lang="sass">
.kato_dinamic_search
  position: relative

  .kato_field
    position: relative
    z-index: 100

  .kato_dinamic_options
    background-color: #fff
    padding: 18px 20px 18px 20px
    border-radius: 0 0 6px 6px
    box-shadow: 0 4px 6px rgb(32 33 36 / 18%)
    position: absolute
    top: 77px
    z-index: 0
    max-height: 360px
    overflow-y: scroll
    width: 100%

    ul
      padding: 0
      margin: 0

      li
        list-style: none

        span
          cursor: pointer
          font-size: 16px
          font-family: "Montserrat-Regular", sans-serif
          color: #333
</style>
