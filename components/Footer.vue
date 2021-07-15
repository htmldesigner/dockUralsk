<template>
  <footer class="mt-auto">
    <div class="footer d-flex align-items-center">
      <div class="container footer_container">
        <div class="row">
          <div class="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center mb-lg-0 mb-1">
            <span class="footer_title">© Doc.uralsk.kz</span> <span class="footer_date">2021</span>
          </div>
          <div class="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
            <a class="footer_development" href="https://web-design.kz/">Разработка — Cтудия «Web-Design.kz»</a>
          </div>
        </div>
      </div>
    </div>

    <!--Моб футер-->
    <div class="mobile_footer d-md-none d-block">
      <div class="mobile_footer_nav">

        <NuxtLink :to="localePath('/')">
          <img src="~assets/img/home.svg" alt="Alt">
          <span>{{$t('buttons.index')}}</span>
        </NuxtLink>

        <NuxtLink :to="localePath('/catalog')">
          <img src="~assets/img/catalog.svg" alt="Alt">
          <span>{{$t('buttons.catalog')}}</span>
        </NuxtLink>

        <NuxtLink :to="localePath('/cabinet')">
          <img src="~assets/img/user.svg" alt="Alt">
          <span>{{$t('buttons.cabinet')}}</span>
        </NuxtLink>
      </div>
    </div>


  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
