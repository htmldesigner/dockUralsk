<template>
  <div v-if="element">
    <label
      :for="element.name"
      class="form-label">{{ row.title }}
      <span v-if="element.validations.includes('required')" class="required">*</span>
      <span v-if="element.tooltip" class="hint" :title="element.tooltip"></span>
    </label>
    <ValidationProvider :rules="{'required': !element.disabled}" v-slot="{ errors }">
      <input
        :id="element.name"
        :type="element.type"
        :disabled="element.disabled"
        :class="{'is-invalid': errors[0]}"
        class="form-control"
        :name="element.name"
        v-model="dataValue"
      >
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>

import moment from "moment";

import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  components: {ValidationProvider, ValidationObserver},
  name: "DateField",

  computed: {
    element: {
      get() {
        this.temp = Object.assign({}, this.row)
        return this.temp
      },
      set(value) {
        this.temp = value
      }
    },
    dataValue: {
      get() {
        if (this.temp.value) {
          return moment(this.temp.value).format('YYYY-MM-DD')
        } else {
          return ''
        }
      },
      set(val) {
        this.temp.value = moment(val, 'YYYY-MM-DD')
      }
    }
  },
  props: ['row', 'index', 'groupName'],
  data() {
    return {
      temp: {
        value: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
