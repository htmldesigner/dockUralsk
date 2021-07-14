<template>
  <div class="mobile_filter_modal bg-white">

    <div class="mobile_filter_header">
      <button class="close" @click="close">{{ $t('buttons.cancel') }}</button>
      <span>{{ $t('filter') }}</span>
      <button @click="resetFilter">{{ $t('buttons.reset') }}</button>
    </div>

    <div class="mobile_filter_body">

      <div class="checkbox_filter_wrap">
        <div class="checkbox_filter" v-for="(value, idx) of filters" :key="idx">

          <div v-if="value.organization">
            <div class="checkbox_filter_label">
              <p>{{ value.organization.title }}</p>
            </div>
            <div class="form-check form-check_them" v-for="option of value.organization.options" :key="option.id">
              <label class="form-check-label check-label_them">{{ option.title }}
                <input
                  class="form-check-input check-input_them"
                  type="checkbox"
                  :value="option.id"
                  v-model="organization"
                  @change="saveOrganization"
                >
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div v-if="value.recipient">
            <div class="checkbox_filter_label">
              <p>{{ value.recipient.title }}</p>
            </div>
            <div class="form-check form-check_them" v-for="option of value.recipient.options" :key="option.id">
              <label class="form-check-label check-label_them">{{ option.title }}
                <input
                  class="form-check-input check-input_them"
                  type="checkbox"
                  :value="option.id"
                  v-model="recipient"
                  @change="saveRecipient"
                >
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="mobile_filter_footer">
      <button @click="applyFilter">{{ $t('buttons.apply') }}</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "FilterPopup",
  props: ['filters'],
  data() {
    return {
      organization: [],
      recipient: []
    }
  },
  methods: {
    saveOrganization() {
      localStorage.setItem('organization', JSON.stringify(this.organization))
    },
    saveRecipient() {
      localStorage.setItem('recipient', JSON.stringify(this.recipient))
    },
    close() {
      this.$emit('close')
    },
    resetFilter() {
      this.organization = []
      this.recipient = []
      delete localStorage.organization
      delete localStorage.recipient
      this.$emit('reset')
    },
    applyFilter() {
      this.$emit('apply', {organization: this.organization, recipient: this.recipient})
      this.close()
    }
  },
  mounted() {
    this.organization = JSON.parse(localStorage.getItem('organization')) || []
    this.recipient = JSON.parse(localStorage.getItem('recipient')) || []
  }
}
</script>

<style scoped>

</style>
