<template>
  <div class="supplement-section">

    <div class="supplement-section_title">
      <p>{{ rows.fields_array.title }}</p>
      <span v-if="rows.fields_array.required" class="required">*</span>
    </div>

    <div v-for="(sup_fields) in rows.fields_array.rows">
      <div v-if="sup_fields.fields" class="supplement-section_fields">
        <div class="supplement-section_fields_inner d-flex">
          <div class="field" v-for="fields in sup_fields.fields">
            <FormGenerator
              @loadMap="loadMap"
              :row="fields"
              @checkBoxEvent="checkBoxEvent"
            />
          </div>
        </div>

      </div>

      <div v-if="sup_fields.fields_array" class="supplement-section_fields">

        <div v-for="fields in sup_fields.fields_array.rows">
          <div :class="fields.cssClasses">
            <div class="supplement-section_sub_title">
              <p>{{ sup_fields.fields_array.title }}</p>
              <span v-if="sup_fields.fields_array.required" class="required">*</span>
            </div>

            <div class="supplement-section_fields_inner d-flex">
              <div class="field" v-for="field in fields.fields">
                <FormGenerator
                  @loadMap="loadMap"
                  :row="field"
                  @checkBoxEvent="checkBoxEvent"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Supplement",
  props: {
    rows: {
      type: Object,
    }
  },
  methods: {
    checkBoxEvent() {
      this.$emit('checkBoxEvent')
    },
    loadMap() {
      this.$emit('loadMap')
    }
  }
}
</script>

<style scoped>

</style>
