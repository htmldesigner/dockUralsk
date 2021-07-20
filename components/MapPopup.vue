<template>
  <div>

    <div class="modal-backdrop">

      <div class="map-view">
        <div @click="$emit('closeMap')" class="text-end">x</div>
        <div style="position: relative; height: 100%">
          <div id="mapid" ref="map" style="width:100%; height:100%; overflow: hidden; position: absolute"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default {
  name: "MapPopup",
  methods: {
    mapInstance() {
      const map = L.map(this.$refs.map, {preferCanvas: true}).setView([40.446947, -106.435546], 5);

      let layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      let gray = new L.tileLayer('http://tiles.maps.sputnik.ru/{z}/{x}/{y}.png')

      let poly = L.polygon([
        [59.509, -0.98],
        [51.503, -0.06],
        [51.51, -0.047]
      ])

      var polygon = L.layerGroup([poly]);

      L.control.layers({
        'layer': layer.addTo(map),
        'gray': gray,
      }).addTo(map);

      map.on('click', (e) => {
        console.log(e.latlng)
      })

    },

    // fixBug () {
    //  L.Marker.prototype.options.icon = L.icon({
    //   iconRetinaUrl,
    //   iconUrl,
    //   shadowUrl,
    //   iconSize: [25, 41],
    //   iconAnchor: [12, 41],
    //   popupAnchor: [1, -34],
    //   tooltipAnchor: [16, -28],
    //   shadowSize: [41, 41]})
    // },
  },
  created() {
    // this.fixBug()
  },
  mounted() {
    this.mapInstance()

  }
}
</script>

<style scoped>

</style>
