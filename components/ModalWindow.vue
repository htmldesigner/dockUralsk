<template>
  <div>
    <div class="modal-backdrop" @click="$emit('closeModal')">

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <p class="h2">Причина отказа</p>
            <div class="btn_close" @click="$emit('closeModal')"></div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow"
}
</script>

<style scoped>

</style>
