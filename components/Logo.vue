<template>
  <div class="logo" :class="{'small': smallClass}">
    <div class="logo-img" :style="{marginRight: logo_img_margin}">
      <img class="img-responsive" :style="{height: logo_height}" src="~assets/img/LogoBig.svg" alt="Alt">
    </div>
    <div class="logo-text" :style="{height: logo_height}">
      <p class="logo-text_index"  :style="{fontSize: text_index_size}">Doc.uralsk.kz</p>
      <p class="logo-text_description" :style="{fontSize: text_description_size}">{{$t('logo_description')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  computed: {
    smallClass(){
      if (this.small){
        return true
      }else {
        return  false
      }
    }
  },
  props: {
    text_index_size: {
      type: String,
    },
    text_description_size: {
      type: String,
    },
    logo_img_margin: {
      type: String,
    },
    logo_height: {
      type: String,
    },
    small: {
      type: Boolean,
    },
  }
}
</script>

<style scoped lang="sass">
p
  margin: 0
  padding: 0

.logo
  display: flex
  justify-content: flex-start
  align-items: center

  .logo-img
    margin-right: 10px

    img
      display: block
      width: auto
      height: 37px

  .logo-text
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 2px 0

    .logo-text_index
      font-size: 18px
      line-height: 22px
      font-family: 'Montserrat-SemiBold', sans-serif

    .logo-text_description
      font-size: 12px
      line-height: 15px
      font-family: 'Montserrat-Regular', sans-serif
      color: #888888


@media (max-width: 1200px)
  .small
    .logo-text_index
      font-size: 16px!important
      line-height: 22px
    .logo-text_description
      font-size: 10px!important
      line-height: 15px


@media (max-width: 768px)
  .logo-text_index
    font-size: 18px!important
    line-height: 22px
  .logo-text_description
    font-size: 16px!important
    line-height: 15px
  .small
    .logo-img
      margin-right: 5px!important
    img
      height: 30px!important
    .logo-text_index
      font-size: 13px!important
      line-height: 22px
    .logo-text_description
      font-size: 8px!important
      line-height: 15px

</style>
