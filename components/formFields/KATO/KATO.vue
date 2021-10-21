<template>
  <div v-if="getKatoChild.length">

    <div  class="row">
      <KatoSelector
        v-for="(options, index) in getKatoChild"
        :options="options"
        :key="options.kato"
        @selectedValue="getKato"
        :index="index+1"
      />

      <KatoInput
        v-if="selectedKato.selected && selectedKato.selected.hasstreet"
        @street="getStreet"
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
    getKatoChild() {
      return this.$store.getters['kato/getKatoChild']
    },
  },
  data() {
    return {
      selectedKato: ''
    }
  },
  methods: {
    async getKato(param) {
      this.selectedKato = param
      if (param.selected.haschild) {
        if (param.index < this.getKatoChild.length) {
          await this.$store.dispatch('kato/splitKato', param.index)
          await this.$store.dispatch('kato/getKatoChild', param.selected.kato)
        } else {
          await this.$store.dispatch('kato/getKatoChild', param.selected.kato)
        }
      } else {
        await this.$store.dispatch('kato/splitKato', param.index)
      }
    },
    getStreet(street){
      this.$store.dispatch('kato/getKatoStreets', {kato: this.selectedKato.selected.kato, street: street})
    }
  },
  mounted() {
    this.$store.dispatch('kato/getKatoChild')
  }
}
</script>

<style scoped>

</style>
