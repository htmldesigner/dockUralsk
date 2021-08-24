<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

              <button class="btn_outline" @click="$emit('close')">
                <svg class="btn_outline_ico" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5267 2.75823L9.28475 7.00059L13.5267 11.2427C14.1576 11.8739 14.1576 12.8964 13.5267 13.5276C13.2114 13.8429 12.7981 14.0006 12.385 14.0006C11.9711 14.0006 11.5578 13.8431 11.2428 13.5276L6.99991 9.28498L2.75738 13.5276C2.44216 13.8428 2.02879 14.0006 1.6153 14.0006C1.20193 14.0006 0.788846 13.8431 0.473343 13.5276C-0.157622 12.8967 -0.157622 11.8742 0.473343 11.2427L4.71515 7.00055L0.473102 2.75823C-0.157863 2.12727 -0.157863 1.10456 0.473102 0.473594C1.10395 -0.156888 2.12605 -0.156888 2.75714 0.473594L6.99987 4.71595L11.2423 0.473594C11.8735 -0.156888 12.8957 -0.156888 13.5264 0.473594C14.1576 1.10456 14.1576 2.12727 13.5267 2.75823Z"
                  />
                </svg>
              </button>

              <button class="btn_primary" @click="$emit('confirm')">
                <svg class="btn_primary_ico" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.18658 14C7.95904 14.0001 7.73373 13.9538 7.52351 13.8638C7.31329 13.7738 7.12228 13.6419 6.96141 13.4756L0.505651 6.80331C0.180716 6.46748 -0.00183106 6.01199 -0.00183105 5.53705C-0.00183105 5.06211 0.180716 4.60662 0.505651 4.27079C0.830586 3.93496 1.27129 3.74629 1.73082 3.74629C2.19035 3.74629 2.63106 3.93496 2.95599 4.27079L8.18658 9.6768L17.0419 0.524502C17.2028 0.358215 17.3938 0.226308 17.604 0.136313C17.8142 0.0463192 18.0395 0 18.267 0C18.4946 0 18.7199 0.0463192 18.9301 0.136313C19.1403 0.226308 19.3313 0.358215 19.4922 0.524502C19.6531 0.69079 19.7807 0.888202 19.8678 1.10547C19.9549 1.32273 19.9997 1.5556 19.9997 1.79076C19.9997 2.02593 19.9549 2.25879 19.8678 2.47606C19.7807 2.69332 19.6531 2.89074 19.4922 3.05702L9.41175 13.4756C9.25087 13.6419 9.05986 13.7738 8.84964 13.8638C8.63943 13.9538 8.41411 14.0001 8.18658 14Z"
                    fill="white"/>
                </svg>
              </button>

            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SortPopUp"
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  min-width: 146px;
  max-width: 272px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
