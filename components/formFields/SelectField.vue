<template>
  <div v-if="select">
    <label
      :for="select.name" class="form-label">{{ select.title }}
      <span v-if="select.validations.includes('required')" class="required">*</span>
      <span v-if="select.tooltip" class="hint" :title="select.tooltip"></span>
    </label>
    <ValidationProvider :rules="{'required': !select.disabled}" v-slot="{ errors }">
      <select
        v-model="selected"
        :disabled="select.disabled"
        :class="{'is-invalid': errors[0]}"
        class="form-control"
        :name="select.name"
        :id="select.name">
        <option v-for="option in select.options" :value="option.id">{{ option.text }}</option>
      </select>
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
  name: "SelectField",
  props: ['row', 'index', 'groupName'],
  computed: {
    select() {
      return Object.assign({}, this.row)
    }
  },
  data() {
    return {
      selected: '',
    }
  }
}
</script>

<style scoped>

</style>
