<template>
<div v-if="row">
  <label :for="row.name" class="form-label">
    {{ row.title }}
    <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
  </label>
  <textarea
    :disabled="row.disabled"
    class="form-control"
    :placeholder="row.placeholder"
    :id="row.name"
    :name="row.name"
    rows="3"></textarea>
</div>
</template>

<script>
export default {
name: "TextAreaField",
  props: ['row', 'index', 'groupName'],
}
</script>

<style scoped>

</style>
