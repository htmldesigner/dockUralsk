<template>
  <div v-if="katoChild.length">

    <div class="row">

      <KatoSelector
        v-for="(options, index) in katoChild"
        :options="options"
        :key="options.kato"
        @selectedValue="getKato"
        :index="index+1"
      />

      <KatoInput ref="refInput"
        :label="'Улица'"
        v-if="selectedKato.selected && selectedKato.selected.hasstreet"
        @candidate="getStreet"
        :list="katoStreets"
        @target="getHouses"
      />

      <KatoInput
        :label="'Дом'"
        v-if="katoHouses.length"
        :list="katoHouses"
      />

    </div>

  </div>
</template>

<script>
import KatoSelector from "./KatoSelector";
import KatoInput from "./KatoInput";

export default {
  name: "KATO",
  components: {KatoSelector, KatoInput},
  props: ['row'],
  computed: {
    katoChild() {
      return this.$store.getters['kato/getKatoChild']
    },
    katoStreets() {
      return this.$store.getters['kato/getKatoStreets']
    },
    katoHouses() {
      return this.$store.getters['kato/getStreetHouses']
    }
  },
  data() {
    return {
      street: '',
      selectedKato: '',
      selectedStreet: ''
    }
  },
  methods: {
    async getKato(param) {
      this.selectedKato = param
      if (param.selected.haschild) {
        if (param.index < this.katoChild.length) { // при смене предидущих значений очищать все значения до текущего
          await this.$store.dispatch('kato/splitKato', param.index)
          await this.$store.commit('kato/SET_STREET_HOUSES', [])
          await this.$store.commit('kato/SET_KATO_STREETS', [])
          await this.$store.dispatch('kato/getKatoChild', param.selected.kato)
          this.$refs.refInput?.clear()
        } else {
          await this.$store.dispatch('kato/getKatoChild', param.selected.kato)
          await this.$store.commit('kato/SET_STREET_HOUSES', [])
          await this.$store.commit('kato/SET_KATO_STREETS', [])
        }
      } else {
        await this.$store.dispatch('kato/splitKato', param.index)
        await this.$store.commit('kato/SET_STREET_HOUSES', [])
        await this.$store.commit('kato/SET_KATO_STREETS', [])
        this.$refs.refInput?.clear()
      }
    },

    getStreet(street) {
      if (street.length !== 0) {
        this.$store.dispatch('kato/getKatoStreets', {kato: this.selectedKato.selected.kato, street: street})
        this.$store.commit('kato/SET_STREET_HOUSES', [])
      } else {
        this.$store.commit('kato/SET_KATO_STREETS', [])
        this.$store.commit('kato/SET_STREET_HOUSES', [])
      }
    },

    getHouses(value) {
      if (value.code) {
        this.$store.dispatch('kato/getStreetHouses', value.code)
        this.selectedStreet = value
      }
    },
    getFlat(value) {
      console.log(value)
    }
  },
  mounted() {
    this.$store.dispatch('kato/getKatoChild')
  }
}
</script>

<style scoped>

</style>
