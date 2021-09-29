<template>
  <div v-if="field">
    <label
      :for="field.name"
      class="form-label">{{ field.title }}
      <span v-if="field.validations.includes('required')" class="required">*</span>
      <span v-if="field.tooltip" class="hint" :title="field.tooltip"></span>
    </label>
    <ValidationProvider :rules="field.validations.join('|')" v-slot="{ errors }">
      <input
        v-mask="'+7(###)-###-##-##'"
        :id="field.name"
        placeholder="+7(999)-999-99-99"
        :required="field.validations.includes('required')"
        :class="{'is-invalid': errors[0]}"
        type="text"
        :disabled="field.disabled"
        class="form-control"
        v-model="field.value"
        :name="field.name"
        @focus="activateField"
      >
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  components: {ValidationProvider, ValidationObserver},
  name: "PhoneField",
  props: ['row', 'index', 'groupName'],
  computed: {
    field: {
      get() {
        return Object.assign({}, this.row)
      },
      set(value) {
        console.log(value)
        this.field.value = value
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    activateField() {
      if (!this.field.value.length) {
        this.field.value = '+7('
      }
    }
  }
}
</script>

<style scoped>

</style>
