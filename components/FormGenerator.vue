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
      <MultiFilesField :row="row"/>
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
        @click.prevent="$emit('loadMap')"
        :disabled="row.disabled"
        class="btn_light btn_block">
        <img src="~assets/img/locationPin.svg" alt="Alt">
        {{ row.title }}
      </button>
    </div>

    <div class="form-group mb-4" style="margin-top: 30px;" v-if="row.type === 'subtract'">
      <button class="btn_outline_small" @click.prevent="$emit('removeItem', {index, groupName})">
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
  props: ['row', 'index', 'groupName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
