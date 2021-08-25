<template>
  <div>
    <label class="form-label">{{ row.title }}
      <span v-if="row.validations[0]" class="required">*</span>
      <span v-if="row.tooltip" class="hint" :title="rows.tooltip"></span>
    </label>

    <button
      type="button"
      @click.prevent="$emit('loadMap')"
      :disabled="row.disabled"
      class="btn_light btn_block"
    >

      <template v-if="geoDate">
          <span style="word-break: break-all; line-height: 24px; text-align: left;">
            {{ geoDate.address.Region }}, {{ geoDate.address.City }}, {{ geoDate.address.Address }}
          </span>
        <button type="button" @click.stop.prevent="clearGeoDate()">
          <svg class="removeSvgIcon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5268 2.75799L9.28487 7.00034L13.5268 11.2425C14.1578 11.8737 14.1578 12.8962 13.5268 13.5274C13.2115 13.8426 12.7982 14.0004 12.3851 14.0004C11.9713 14.0004 11.5579 13.8429 11.2429 13.5274L7.00003 9.28474L2.7575 13.5273C2.44228 13.8426 2.02891 14.0003 1.61542 14.0003C1.20206 14.0003 0.788968 13.8428 0.473465 13.5273C-0.1575 12.8964 -0.1575 11.8739 0.473465 11.2425L4.71527 7.0003L0.473224 2.75799C-0.157741 2.12702 -0.157741 1.10431 0.473224 0.473349C1.10407 -0.157132 2.12618 -0.157132 2.75726 0.473349L6.99999 4.71571L11.2424 0.473349C11.8736 -0.157132 12.8958 -0.157132 13.5266 0.473349C14.1578 1.10431 14.1578 2.12702 13.5268 2.75799Z"
            />
          </svg>
        </button>
      </template>
      <template v-else><img src="~assets/img/locationPin.svg" alt="Alt">{{ row.title }}</template>
    </button>

    <ValidationProvider :rules="{'required': !row.disabled}" ref="provider" v-slot="{ errors }">
      <input type="hidden"
             v-model="mapAddress"
             :class="{'is-invalid': errors[0]}"
      >
      <div v-if="errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "GeoButton",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: ['row', 'index', 'groupName'],
  computed: {
    geoDate() {
      this.mapAddress = this.$store.getters['helper/getGeoDate']
      return this.$store.getters['helper/getGeoDate']
    }
  },
  methods: {
    clearGeoDate() {
      this.$store.commit('helper/CLEAR_GEO_DATE')
    }
  },
  data() {
    return {
      mapAddress: null
    }
  }
}
</script>

<style scoped>

</style>
