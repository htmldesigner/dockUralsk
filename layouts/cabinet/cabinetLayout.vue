<template>
  <div class="isPage d-flex flex-column h-100">
    <Header/>
    <section class="container">
      <div class="container">
        <div class="row">
              <Nuxt/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "cabinetLayout",
  // middleware: 'authenticated',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
