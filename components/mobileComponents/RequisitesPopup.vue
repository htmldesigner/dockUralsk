<template>
  <div class="mobile_popup_modal bg-white">
    <div class="mobile_popup_header">
      <span>{{$t('requisites')}}</span>
      <button @click="close" class="close">{{$t('buttons.close')}}</button>
    </div>
    <div class="mobile_popup_body">
      <div class="requisites">
        <div class="requisites_list">
          <ul v-if="values">
            <li v-for="value of values">
              <p class="requisites_name">{{ value.title }}</p>
              <p class="requisites_content">{{ value.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mobile_popup_footer"></div>
  </div>
</template>

<script>
export default {
  name: "RequisitesPopup",
  props: ['values'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
