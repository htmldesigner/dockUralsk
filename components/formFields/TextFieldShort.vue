<template>
  <div v-if="text" class="d-flex" style="margin-right: 40px">

    <ValidationProvider :rules="rules" v-slot="{ errors }">
      <input
        :id="text.name"
        :type="text.type"
        :class="{'is-invalid': errors[0], 'field-width': text.cssClasses.length}"
        :disabled="text.disabled"
        class="form-control"
        v-model="text.value"
        :name="text.name"
      >
<!--      <div v-if="errors[0]" class="invalid-feedback">-->
<!--        {{ errors[0] }}-->
<!--      </div>-->
    </ValidationProvider>
    <label v-html="text.description" style="margin-top: 10px; margin-left: 15px"></label>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  components: {ValidationProvider, ValidationObserver},
  props: ['row', 'index', 'groupName'],
  name: "TextFieldShort",
  computed: {
    rules() {
      if (!this.text.disabled) {
        return this.text.validations.join('|')
      } else {
        return ''
      }
    },
    text() {
      return Object.assign({}, this.row)
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
