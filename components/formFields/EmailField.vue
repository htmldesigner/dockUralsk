<template>
  <div v-if="field">
    <label
      :for="field.name"
      class="form-label">{{ field.title }}
      <span v-if="field.validations.includes('required')" class="required">*</span>
      <span v-if="field.tooltip" class="hint" :title="field.tooltip"></span>
    </label>
    <ValidationProvider rules="email" v-slot="{ errors }">
    <input
      :id="field.name"
      :required="field.validations.includes('required')"
      :type="field.type"
      :class="{'is-invalid': errors[0]}"
      :disabled="field.disabled"
      class="form-control"
      v-model="field.value"
      :name="field.name"
    >
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";
export default {
  components: {ValidationProvider, ValidationObserver},
  name: "EmailField",
  props: ['row', 'index', 'groupName'],
  computed: {
    rules() {
      if (!this.field.disabled) {
        return this.field.validations.join('|')
      } else {
        return ''
      }
    },
    field() {
      return Object.assign({}, this.row)
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
