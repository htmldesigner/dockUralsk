<template>
  <div v-if="row">
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>
    <ValidationProvider rules="minPhone:17" v-slot="{ errors }">
      <input
        v-mask="'+7(###)-###-##-##'"
        :id="row.name"
        :required="row.validations[0]"
        :class="{'is-invalid': errors[0]}"
        type="text"
        :disabled="row.disabled"
        class="form-control"
        v-model="phone"
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
  name: "PhoneField",
  props: ['row', 'index', 'groupName'],
  data() {
    return {
      phone: ''
    }
  }
}
</script>

<style scoped>

</style>
