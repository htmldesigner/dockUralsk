<template>
  <div class="col-md-4 mb-4">
    <select
      class="form-control"
      v-model="selected"
      @change="emitKato()"
    >
      <option
        :value="option"
        v-for="option in options"
      >
        {{ `${option["name_" + $i18n.localeProperties.code]}` }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "KatoSelector",
  props: ['options', 'index'],
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    emitKato() {
      this.$emit('selectedValue', {selected: this.selected, index: this.index})
    }
  }
}
</script>

<style scoped>

</style>
