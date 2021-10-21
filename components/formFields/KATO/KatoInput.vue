<template>
  <div>
    <label for="kato_street" class="form-label">Адрес</label>
    <input @input="emitStreet($event)" id="kato_street" class="form-control" type="text" v-model="street">
  </div>

</template>

<script>
export default {
  name: "KatoInput",
  data() {
    return {
      street: ''
    }
  },
  methods: {
    emitStreet(event){
      this.$emit('street', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
