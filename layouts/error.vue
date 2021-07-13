<template>
  <section>
    <h1>Error 404</h1>
    <a @click="back" href="/">Home</a>
  </section>
</template>

<script>
export default {
  name: "error",
  methods: {
    back(){
      this.$route.push('/')
    }
  }
}
</script>

<style scoped>

</style>
