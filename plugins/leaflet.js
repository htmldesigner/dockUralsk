import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
// import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: require('@/assets/img/marker.svg'),
  shadowUrl: iconShadow,
  iconSize: [29, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [42, 34]
})
