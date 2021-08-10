<template>

  <div v-if="row">

    <div class="form-group mb-4" v-if="row.type === 'text'">
      <TextField :row="row"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'date'">
      <DateField :row="row"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'tel'">
      <PhoneField :row="row"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'email'">
      <EmailField :row="row"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'select'">
      <SelectField :row="row"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'multifiles'">
      <MultiFilesField :row="row" :index="index"/>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'textarea'">
      <div class="form-group mb-4">
        <TextAreaField :row="row"/>
      </div>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'checkbox'">
      <div class="form-group mb-4">
        <div class="form-check form-check_them">
          <label class="form-check-label check-label_them">{{ row.title }}
            <span v-if="row.validations[0]" class="required">*</span>
            <span v-if="row.tooltip" class="hint" :title="rows.tooltip"></span>
            <input
              :disabled="row.disabled"
              class="form-check-input check-input_them"
              type="checkbox"
              :name="row.name"
              :value="row.value"
              :checked="row.value"
              @change="$emit('checkBoxEvent', {status: !!row.value, value: row.name})"
            >
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="form-group mb-4" v-if="row.type === 'geo'">
      <label class="form-label">{{ row.title }}
        <span v-if="row.validations[0]" class="required">*</span>
        <span v-if="row.tooltip" class="hint" :title="rows.tooltip"></span>
      </label>
      <button
        type="button"
        @click.prevent="$emit('loadMap')"
        :disabled="row.disabled"
        class="btn_light btn_block">

        <template v-if="geoDate">
          <span style="word-break: break-all; line-height: 24px; text-align: left;">{{geoDate.address.Region}}, {{geoDate.address.City}}, {{geoDate.address.Address}}</span>
          <button type="button" @click.stop.prevent="clearGeoDate()">
            <svg class="removeSvgIcon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5268 2.75799L9.28487 7.00034L13.5268 11.2425C14.1578 11.8737 14.1578 12.8962 13.5268 13.5274C13.2115 13.8426 12.7982 14.0004 12.3851 14.0004C11.9713 14.0004 11.5579 13.8429 11.2429 13.5274L7.00003 9.28474L2.7575 13.5273C2.44228 13.8426 2.02891 14.0003 1.61542 14.0003C1.20206 14.0003 0.788968 13.8428 0.473465 13.5273C-0.1575 12.8964 -0.1575 11.8739 0.473465 11.2425L4.71527 7.0003L0.473224 2.75799C-0.157741 2.12702 -0.157741 1.10431 0.473224 0.473349C1.10407 -0.157132 2.12618 -0.157132 2.75726 0.473349L6.99999 4.71571L11.2424 0.473349C11.8736 -0.157132 12.8958 -0.157132 13.5266 0.473349C14.1578 1.10431 14.1578 2.12702 13.5268 2.75799Z"
              />
            </svg>
          </button>
        </template>

        <template v-else><img src="~assets/img/locationPin.svg" alt="Alt"> {{ row.title }}</template>

      </button>
    </div>

    <div class="form-group mb-4" style="margin-top: 30px;" v-if="row.type === 'subtract'">
      <button type="button" class="btn_outline_small" @click.prevent="$emit('removeItem', {index, groupName})">
        <svg width="15" height="6" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.64 0.711999H12.168V3.44H0.64V0.711999Z"/>
        </svg>
      </button>
    </div>

  </div>


</template>

<script>
import TextField from "@/components/formFields/TextField";
import PhoneField from "@/components/formFields/PhoneField";
import DateField from "@/components/formFields/DateField";
import EmailField from "@/components/formFields/EmailField";
import SelectField from "@/components/formFields/SelectField";
import MultiFilesField from "@/components/formFields/MultiFilesField";
import TextAreaField from "@/components/formFields/TextAreaField";

export default {
  components: {TextField, PhoneField, DateField, EmailField, SelectField, MultiFilesField, TextAreaField},
  name: "FormGenerator",
  computed: {
    geoDate(){
      return this.$store.getters['helper/getGeoDate']
    }
  },
  methods: {
    clearGeoDate(){
      this.$store.commit('helper/CLEAR_GEO_DATE')
    }
  },
  props: ['row', 'index', 'groupName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
