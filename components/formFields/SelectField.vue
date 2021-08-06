<template>
  <div v-if="row">
    <label
      :for="row.name" class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>
    <select
      :required="row.validations[0]"
      :disabled="row.disabled"
      class="form-control"
      :name="row.name"
      :id="row.name">
      <option v-for="option in row.options" :value="option.id">{{ option.text }}</option>
    </select>
    <div class="invalid-feedback">
      Login is invalid
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  props: ['row', 'index', 'groupName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
