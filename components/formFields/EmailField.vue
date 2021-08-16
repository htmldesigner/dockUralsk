<template>
  <div v-if="row">
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations.includes('required')" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>
    <ValidationProvider rules="email" v-slot="{ errors }">
    <input
      :id="row.name"
      :required="row.validations.includes('required')"
      :type="row.type"
      :class="{'is-invalid': errors[0]}"
      :disabled="row.disabled"
      class="form-control"
      v-model="value"
      :name="row.name"
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
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
