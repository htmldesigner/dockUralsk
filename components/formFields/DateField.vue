<template>
  <div v-if="row">
    <label
      :for="row.name"
      class="form-label">{{ row.title }}
      <span v-if="row.validations.includes('required')" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>
    <input
      :id="row.name"
      :required="row.validations.includes('required')"
      :type="row.type"
      :disabled="row.disabled"
      class="form-control"
      :value="$moment(row.value).format('YYYY-MM-DD')"
      :name="row.name"

    >
    <div class="invalid-feedback">
      Login is invalid
    </div>
  </div>
</template>

<script>

export default {
  name: "DateField",
  props: ['row', 'index', 'groupName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
