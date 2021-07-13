<template>
  <div class="isPage d-flex flex-column h-100">
    <HeaderWithFilter/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithFilter from "../components/HeaderWithFilter";
import Footer from "../components/Footer";

export default {
  name: "catalogLayoutService",
  components: {
    HeaderWithFilter,
    Footer
  }
}
</script>

<style scoped>

</style>
