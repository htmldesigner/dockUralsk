<template>
  <div class="header_language">
    <div class="language_switcher">
      <div class="selector"
           v-if="languages.length"
           @click="openSelector" :class="{open: isOpen}"
           @mouseleave="closeSelector"
      >
        <span v-for="lang in languages" @click="selectLanguage" :data-lang='lang'>{{ lang }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      domElementSelector: null,
      languages: ['kz', 'ru'],
      isOpen: false,
      selected_lang: null
    }
  },
  methods: {
    selectLanguage(event){
      console.log(event.currentTarget.dataset['lang'])
      if (event.currentTarget.dataset['lang'] !== this.selected_lang) {
        this.closeSelector()
        let idx = this.languages.indexOf(event.currentTarget.dataset['lang'])
        this.selected_lang = this.languages[idx]
        localStorage.setItem('current_lang', this.selected_lang)
        this.languages.splice(idx, 1)
        this.languages.unshift(event.currentTarget.dataset['lang'])
        this.$i18n.setLocale(event.currentTarget.dataset['lang'])
      }
    },

    openSelector() {
      this.isOpen = true
      this.domElementSelector.childNodes.forEach(el => {
        el.style.display = 'inline-block'
      })

      this.domElementSelector.style.maxHeight = this.domElementSelector.scrollHeight + "px"
    },

    closeSelector() {
      this.isOpen = false
      this.domElementSelector.style.maxHeight = 36 + "px"

      setTimeout(() => {
        this.domElementSelector.childNodes.forEach(el => {
          if (!el.classList.contains('active')) {
            el.style.display = 'none'
          }
        })
      }, 100)
    }

  },
 async mounted() {
    this.domElementSelector = await document.querySelector('.selector')
    this.selected_lang = await localStorage.getItem('current_lang') ? localStorage.getItem('current_lang') : this.languages[0]

   this.$i18n.setLocale(this.selected_lang)


    if (this.domElementSelector) {
      this.domElementSelector.firstChild.classList?.add('active')
    }

   let selected_idx = this.languages.indexOf(this.selected_lang)
   if (selected_idx !== 0) {
     this.languages.splice(selected_idx, 1)
     this.languages.unshift(this.selected_lang)
   }
  }
}
</script>

<style scoped>

</style>
