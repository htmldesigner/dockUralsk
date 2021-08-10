<template>
  <div v-if="row">

    <label
      :for="row.name + index"
      class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="row.tooltip"></span>
    </label>

    <div class="file-input" @dragover.prevent="dragover" @dragleave.prevent="dragleave"
         @drop.prevent="addFile(row.name + index, $event)">
      <input
        multiple
        type="file"
        :name="row.name"
        :id="row.name + index"
        class="file-input__input"
        :required="true"
        @click="onValidate(row.name + index)"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <div class="file-input__label" v-if="fileList.length" v-cloak>
        <ul>
          <li v-for="file in fileList">
            <span style="word-break: break-all">{{ file.name }}</span>
            <button type="button" @click.prevent="remove(row.name + index, fileList.indexOf(file))">
              <svg class="removeSvgIcon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5268 2.75799L9.28487 7.00034L13.5268 11.2425C14.1578 11.8737 14.1578 12.8962 13.5268 13.5274C13.2115 13.8426 12.7982 14.0004 12.3851 14.0004C11.9713 14.0004 11.5579 13.8429 11.2429 13.5274L7.00003 9.28474L2.7575 13.5273C2.44228 13.8426 2.02891 14.0003 1.61542 14.0003C1.20206 14.0003 0.788968 13.8428 0.473465 13.5273C-0.1575 12.8964 -0.1575 11.8739 0.473465 11.2425L4.71527 7.0003L0.473224 2.75799C-0.157741 2.12702 -0.157741 1.10431 0.473224 0.473349C1.10407 -0.157132 2.12618 -0.157132 2.75726 0.473349L6.99999 4.71571L11.2424 0.473349C11.8736 -0.157132 12.8958 -0.157132 13.5266 0.473349C14.1578 1.10431 14.1578 2.12702 13.5268 2.75799Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <label :required="row.validations[0]" v-else class="file-input__label" :for="row.name + index">
        <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.94861 19.135C2.8934 19.135 1.90134 18.7241 1.15521 17.9779C-0.38507 16.4377 -0.38507 13.9314 1.15521 12.3911L10.0189 3.52746C11.0647 2.48162 12.7665 2.48162 13.8123 3.52746C14.8581 4.5733 14.8581 6.27504 13.8123 7.32088L7.29253 13.8406C7.03351 14.0997 6.61346 14.0997 6.35438 13.8406C6.09531 13.5816 6.09531 13.1615 6.35438 12.9025L12.8741 6.38269C13.4027 5.85415 13.4027 4.99414 12.8741 4.46561C12.6181 4.20954 12.2777 4.06855 11.9156 4.06855C11.5535 4.06855 11.2131 4.20954 10.957 4.46561L2.09336 13.3293C1.07039 14.3523 1.07039 16.0168 2.09336 17.0398C2.58895 17.5353 3.24782 17.8083 3.94861 17.8083C4.64941 17.8083 5.30832 17.5353 5.80387 17.0398L14.8756 7.96808C15.6107 7.23301 16.0154 6.25572 16.0154 5.21616C16.0154 4.1766 15.6107 3.1993 14.8756 2.46423C13.3581 0.946776 10.8891 0.94682 9.3717 2.46423L2.64392 9.19197C2.38489 9.45104 1.96484 9.45104 1.70577 9.19197C1.4467 8.9329 1.4467 8.51289 1.70577 8.25382L8.43355 1.52604C10.4683 -0.50868 13.779 -0.50868 15.8137 1.52604C16.7994 2.51169 17.3423 3.82222 17.3423 5.21616C17.3423 6.61009 16.7994 7.92058 15.8137 8.90627L6.74202 17.9779C5.99589 18.7241 5.00383 19.135 3.94861 19.135Z"
            fill="#39A9CB"/>
        </svg>
        <span>{{ $t('buttons.drop_down') }}</span>
      </label>

      <div class="invalid-feedback">
        Error
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "MultiFilesField",
  props: ['row', 'index', 'groupName'],
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    remove(id, i) {
      console.log(id)
      this.fileList.splice(i, 1)
      this.onValidate(id)
    },
    onValidate(id) {

      const file = this.$refs.file.files[0]

      let feedbackElement = null

      let element = document.getElementById(id)

      let fileFormat = [
        'application/pdf',
        'application/vnd.ms-excel',
        'image/jpeg',
        'image/png',
        'image/bmp',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ]

      element.parentNode.childNodes.forEach(el => {
        if (el.className === 'invalid-feedback') {
          feedbackElement = el
        }
      })

      if (!this.fileList.length) {
        feedbackElement.style.display = 'block'
        return feedbackElement.innerHTML = 'Загрузите фаил'
      } else {
        feedbackElement.style.display = 'none'
      }

      if (fileFormat.includes(file?.type)) {
        feedbackElement.style.display = 'none'
      } else {
        feedbackElement.style.display = 'block'
        this.fileList = []
        return feedbackElement.innerHTML = 'Не верный формат'
      }

      if (file?.size > 10024 * 1024) {
        feedbackElement.style.display = 'block'
        this.fileList = []
        return feedbackElement.innerHTML = 'Слишком большой фаил (> 10MB)'
      } else {
        feedbackElement.style.display = 'none'
      }
    },

    onChange(event) {
      let id = event.target.id
      this.fileList = [this.$refs.file.files[0]]
      if (this.fileList)
        this.onValidate(id)
    },
    dragover(event) {
      event.currentTarget.classList.add('dragover')
    },
    dragleave(event) {
      event.currentTarget.classList.remove('dragover')
    },
    addFile(id, event) {
      this.$refs.file.files = event.dataTransfer.files
      this.fileList = [this.$refs.file.files[0]]
      if (this.fileList) {
        this.onValidate(id)
        event.currentTarget.classList.remove('dragover')
      }
    }
  }
}
</script>

<style scoped>
.dragover .file-input__label {
  transition: .25s ease;
  border: 1px dashed #b1b1b1;
  background: #c7eefa;
}
</style>
