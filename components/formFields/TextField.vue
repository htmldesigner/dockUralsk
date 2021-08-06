<template>
  <div v-if="row">
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>
    <ValidationProvider rules="required" v-slot="{ errors }">
    <input
      :id="row.name"
      :required="row.validations[0]"
      :type="row.type"
      :class="{'is-invalid': errors[0]}"
      :disabled="row.disabled"
      class="form-control"
      :value="row.value"
      v-model="text"
      :name="row.name">
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
  data() {
    return {
      text:''
    }
  }
}
</script>

<style scoped>

</style>
