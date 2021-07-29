<template>
  <div class="isPage d-flex flex-column h-100">
    <Header/>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12 d-flex align-items-center flex-column s-h">
          <div class="error-number">
            <p>404</p>
          </div>
          <div class="error-message">
            <p>Страница не найдена, пожалуйста перейдите на <a href="/">главную страницу</a>
              и воспользуйтесь поиском, чтобы найти интересующий вас материал</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "error",
  components: {
    Header,
    Footer
  },
  methods: {
    back() {
      this.$route.push('/')
    }
  }
}
</script>

<style scoped lang="sass">
.error-number
  p
    font-size: 282px
    line-height: 342px
    font-family: 'Montserrat-SemiBold', sans-serif
    color: #E0E0E0
.error-message
  p
    font-size: 16px
    line-height: 20px
    font-family: "Montserrat-Regular", sans-serif
  a
    text-decoration: none
    color: #39A9CB

@media (max-width: 768px)
  .error-number
    p
      font-size: 148px
  .error-message
    text-align: center
    p
      font-size: 14px

</style>
