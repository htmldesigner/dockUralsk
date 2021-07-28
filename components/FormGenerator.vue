<template>


    <div v-if="row">

<!--      <div class="form-group mb-4" v-if="row.type === 'text'">-->
<!--        <label-->
<!--          :for="row.name"-->
<!--          class="form-label">{{ row.title }}-->
<!--          <span v-if="row.validations[0]" class="required">*</span>-->
<!--          <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>-->
<!--        </label>-->
<!--        <input-->
<!--          :id="row.name"-->
<!--          :required="row.validations[0]"-->
<!--          :type="row.type"-->
<!--          :disabled="row.disabled"-->
<!--          class="form-control"-->
<!--          :value="row.value"-->
<!--          :name="row.name">-->
<!--        <div class="invalid-feedback">-->
<!--          Login is invalid-->
<!--        </div>-->
<!--      </div>-->

      <div class="form-group mb-4" v-if="row.type === 'select'">
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

      <div class="form-group mb-4" v-if="row.type === 'multifiles'">
        <label
          :for="row.name + index"
          class="form-label">{{ row.title }}
          <span v-if="row.validations[0]" class="required">*</span>
          <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
        </label>
        <div class="file-input">
          <input
            type="file"
            :name="row.name"
            :id="row.name + index"
            class="file-input__input"
            :required="row.validations[0]"
          />
          <label :required="row.validations[0]" class="file-input__label" :for="row.name + index">
            <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.94861 19.135C2.8934 19.135 1.90134 18.7241 1.15521 17.9779C-0.38507 16.4377 -0.38507 13.9314 1.15521 12.3911L10.0189 3.52746C11.0647 2.48162 12.7665 2.48162 13.8123 3.52746C14.8581 4.5733 14.8581 6.27504 13.8123 7.32088L7.29253 13.8406C7.03351 14.0997 6.61346 14.0997 6.35438 13.8406C6.09531 13.5816 6.09531 13.1615 6.35438 12.9025L12.8741 6.38269C13.4027 5.85415 13.4027 4.99414 12.8741 4.46561C12.6181 4.20954 12.2777 4.06855 11.9156 4.06855C11.5535 4.06855 11.2131 4.20954 10.957 4.46561L2.09336 13.3293C1.07039 14.3523 1.07039 16.0168 2.09336 17.0398C2.58895 17.5353 3.24782 17.8083 3.94861 17.8083C4.64941 17.8083 5.30832 17.5353 5.80387 17.0398L14.8756 7.96808C15.6107 7.23301 16.0154 6.25572 16.0154 5.21616C16.0154 4.1766 15.6107 3.1993 14.8756 2.46423C13.3581 0.946776 10.8891 0.94682 9.3717 2.46423L2.64392 9.19197C2.38489 9.45104 1.96484 9.45104 1.70577 9.19197C1.4467 8.9329 1.4467 8.51289 1.70577 8.25382L8.43355 1.52604C10.4683 -0.50868 13.779 -0.50868 15.8137 1.52604C16.7994 2.51169 17.3423 3.82222 17.3423 5.21616C17.3423 6.61009 16.7994 7.92058 15.8137 8.90627L6.74202 17.9779C5.99589 18.7241 5.00383 19.135 3.94861 19.135Z"
                fill="#39A9CB"/>
            </svg>
            <span>Перетащите файл сюда</span>
          </label>
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

      <div class="form-group mb-4" v-if="row.type === 'textarea'">
        <div class="form-group mb-4">
          <label :for="row.name" class="form-label">{{ row.title }}</label>
          <textarea
            :disabled="row.disabled"
            class="form-control"
            :placeholder="row.placeholder"
            :id="row.name"
            :name="row.name"
            rows="3"></textarea>
        </div>
      </div>

      <div class="form-group mb-4" v-if="row.type === 'checkbox'">
        <div class="form-group mb-4">
          <div class="form-check form-check_them">
            <label class="form-check-label check-label_them">{{ row.title }}
              <span v-if="row.validations[0]" class="required">*</span>
              <span v-if="row.tooltip" class="hint" :title="rows.tooltip"></span>
              <input :disabled="row.disabled" class="form-check-input check-input_them" type="checkbox"
                     :name="row.name" :value="row.value">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="form-group mb-4" style="margin-top: 30px;" v-if="row.type === 'subtract'">
        <button class="btn_outline_small" @click.prevent="$emit('removeItem', {index, groupName})">
          <svg width="15" height="6" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.64 0.711999H12.168V3.44H0.64V0.711999Z" />
          </svg>
        </button>
      </div>

    </div>


</template>

<script>
export default {
  name: "FormGenerator",
  props: ['row', 'index', 'groupName']
}
</script>

<style scoped>

</style>
