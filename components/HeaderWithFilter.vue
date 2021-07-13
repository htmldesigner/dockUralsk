<template>
  <header class="header">

    <div class="container">
      <div class="row d-flex justify-content-md-between">

        <div class="col-lg-3 col-md-4 col-7">
          <div class="logo">
            <NuxtLink :to="localePath('/')"><img class="img-responsive" src="~assets/img/logo_1.svg" alt="Alt"></NuxtLink>
          </div>
        </div>

        <div class="col-md-5 col-sm-12 d-lg-block d-none">
          <HeaderFilter/>
        </div>

        <div class="col-lg-4 col-md-6 col-5 d-flex  justify-content-end align-items-center">
          <NuxtLink class="simple_link category_link me-1 d-md-none d-block" to="/catalog">{{$t('buttons.catalog')}}</NuxtLink>
          <LanguageSwitcher/>
          <div class="header_auth d-md-block d-none">
            <ul>
              <li><NuxtLink :to="localePath('/auth/login')">{{$t('buttons.enter')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/auth/registration')">{{$t('buttons.registration')}}</NuxtLink></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </header>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher";
import HeaderFilter from "~/components/HeaderFilter";

export default {
  name: "HeaderWithFilter",
  components: {LanguageSwitcher, HeaderFilter}
}
</script>

<style scoped>

</style>
