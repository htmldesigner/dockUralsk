<template>
  <div v-if="text">
    <label
      :for="text.name"
      class="form-label">{{ text.title }}
      <span v-if="text.validations.includes('required')" class="required">*</span>
      <span v-if="text.tooltip" class="hint" :title="text.tooltip"></span>
    </label>
    <ValidationProvider :rules="rules" v-slot="{ errors }">
      <input
        :id="text.name"
        :type="text.type"
        :class="{'is-invalid': errors[0]}"
        :disabled="text.disabled"
        class="form-control"
        v-model="text.value"
        :name="text.name"
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
  props: ['row', 'index', 'groupName'],
  name: "TextField",
  computed: {
    rules() {
      if (!this.text.disabled) {
        return this.text.validations.join('|')
      } else {
        return ''
      }
    },
    text() {
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
