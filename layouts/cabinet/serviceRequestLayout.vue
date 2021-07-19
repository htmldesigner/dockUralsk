<template>
  <div class="isPage d-flex flex-column h-100">
    <Header/>


    <section class="container">
      <div class="container">
        <div class="row">

          <div class="col-lg-12 col-12 bg-white straight s-h">
            <div class="content">
              <Nuxt/>
            </div>
          </div>

        </div>
      </div>
    </section>


    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "serviceRequestLayout",
  middleware: 'authenticated',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
