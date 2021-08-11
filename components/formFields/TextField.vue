<template>
  <div v-if="row">
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>

    <input
      :id="row.name"
      :required="row.validations[0]"
      :type="row.type"
      :disabled="row.disabled"
      class="form-control"
      :value="row.value"
      :name="row.name">

    <div class="invalid-feedback">
      error
    </div>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  components: {ValidationProvider, ValidationObserver},
  props: ['row', 'index', 'groupName'],
  name: "TextField",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
