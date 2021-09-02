<template>
  <div v-if="element">
    <label
      :for="element.name"
      class="form-label">{{ row.title }}
      <span v-if="element.validations.includes('required')" class="required">*</span>
      <span v-if="element.tooltip" class="hint" :title="element.tooltip"></span>
    </label>
    <ValidationProvider :rules="{'required': !element.disabled}" v-slot="{ errors }">
      <client-only>
        <date-picker
          :id="element.name"
          :disabled="element.disabled"
          :class="{'is-invalid': errors[0]}"
          :name="element.name"
          :placeholder="$t('Y_M_D')"
          format="YYYY-MM-DD"
          value-type="YYYY-MM-DD"
          type="date"
          :lang="lang"
          class="datePickerInput"
          v-model="dataValue"/>
      </client-only>
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import moment from "moment";
import {ValidationProvider, ValidationObserver} from "vee-validate";

import ru from 'vue2-datepicker/locale/ru'
import kz from 'vue2-datepicker/locale/kk'

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
          return null
        }
      },
      set(val) {
        // this.temp.value = moment(val, 'YYYY-MM-DD')
        this.temp.value = val
      }
    }
  },
  props: ['row', 'index', 'groupName'],
  data() {
    return {
      lang: kz,
      temp: {
        value: null
      }
    }
  },
  methods: {
    clearData() {
      this.temp.value = ''
    }
  },
  async mounted() {
    this.lang = await localStorage.getItem('current_lang')
  }
}
</script>

<style scoped>
.mx-datepicker {
  width: 100%;
}

</style>
