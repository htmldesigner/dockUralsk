<template>
  <div>

    <div class="modal-backdrop">

      <div class="map-view">
        <div class="map-view-header">
          <p class="h2">Укажите точку на карте</p>
          <div class="btn_close" @click="$emit('closeMap')"></div>
        </div>


        <div class="map-view-body">
          <div id="mapid" ref="map" style="width:100%; height:100%; overflow: hidden; position: absolute"></div>
        </div>

        <div class="map_view-footer">
          <button @click="onConfirm" class="btn_primary text-end">Подтвердить</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "MapPopup",
  data() {
    return {
      geoData: null
    }
  },
  methods: {
    mapInstance() {
      let self = this
      const map = L.map(this.$refs.map, {preferCanvas: true}).setView([51.219338, 51.380997], 10);

      let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 4,
        attribution: ''
      });
      let google1 = L.tileLayer('//{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20, minZoom: 4,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });
      let google2 = L.tileLayer('//www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
        attribution: 'google',
        maxZoom: 20, minZoom: 4,
      });

      L.control.layers({
        'OSM': osm.addTo(map),
        "google": google1,
        "google2": google2,
      }, {}, {}).addTo(map)

      let marker

      map.on('click', (e) => {
        if (marker) {
          map.removeLayer(marker)
        }

        let geocodeService = ELG.geocodeService()
        geocodeService.reverse().latlng(e.latlng)
          .run(function (error, result) {
            if (error) {
              console.log(error)
              return;
            }
            marker = new L.Marker(e.latlng, {draggable: false})
            map.addLayer(marker)
            self.geoData = result
          })

      })
    },

    onConfirm() {
      // this.$emit('onConfirm', this.geoData)
      this.$store.commit('helper/SET_GEO_DATA', this.geoData)
      this.$emit('closeMap')
    }
  },
  created() {

  },
  mounted() {
    this.mapInstance()
  }
}
</script>

<style scoped>

</style>
