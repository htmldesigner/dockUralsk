<template>
  <div class="col-md-4 mb-4" style="margin-top: 33px">
    <label for="kato_selector" class="form-label d-none">label</label>
    <ValidationProvider rules="required" v-slot="{ errors }">
      <select
        id="kato_selector"
        class="form-control"
        v-model="selected"
        @change="emitKato()"
        :class="{'is-invalid': errors[0]}"
      >
        <option
          :value="option"
          v-for="option in options"
        >
          {{ `${option["name_" + $i18n.localeProperties.code]}` }}
        </option>
      </select>
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "KatoSelector",
  components: {ValidationProvider, ValidationObserver},
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
