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
      geoData: null,
      marker: null,
      markerLayer: new L.featureGroup()
    }
  },
  computed: {
    getGeoDate() {
      return this.$store.getters['helper/getGeoDate']
    }
  },
  watch: {
    getGeoDate: function (value) {
      if (!value) {
        this.markerLayer.clearLayers()
      }
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

      this.markerLayer.addTo(map)

      map.on('click', async (e) => {
        this.markerLayer.clearLayers()
        let geocodeService = ELG.geocodeService()
        let marker = null
        await geocodeService.reverse().latlng(e.latlng)
          .run(function (error, result) {
            if (error) {
              console.log(error)
              return;
            }
            self.geoData = result
            marker = new L.Marker(e.latlng, {draggable: false})
            marker.bindPopup(`${result?.address.Region}, ${result?.address.City}, ${result?.address.Address}`).openTooltip()
            marker.on("add", function (event) {
              event.target.openPopup();
            });
            self.markerLayer.addLayer(marker)
          })
      })
    },

    onConfirm() {
      this.$store.commit('helper/SET_GEO_DATA', this.geoData)
      this.$emit('closeMap')
    }
  },
  mounted() {
    this.mapInstance()
  }
}
</script>

<style scoped>

</style>
