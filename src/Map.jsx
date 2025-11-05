import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  GeoJSON,
} from "react-leaflet";
// import ergänzen nicht vergessen

//import data from "./assets/4.5_week.geojson.json"; // alt, nicht mehr vwe
import plates from "./assets/plate_boundaries.geojson.json";

import Button from "@mui/material/Button";

export const Map = ({ size, setInfo, quake }) => {
  // Kinder Props
  const earthquakes = (quake && quake.features) || []; // prüft ob quake bereits existiert && (logisch und) feautres hat -> || logisch OR [leeres array] alt: data.features Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[20, 0]} // ursprünglich: 47.5, 7.5
      zoom={2} // ursprünglich: 10
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" // ursprünglich: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community" // ursprünglich: "&copy; OpenStreetMap contributors"
      />

      <GeoJSON data={plates} pathOptions={{ color: "yellow" }} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]} // ursprünglich: position =
          radius={[d.properties.mag] * size}
          pathOptions={{ color: "red" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <p></p>
              <Button
                onClick={() => setInfo(d)}
                variant="contained"
                color="info"
                size="small"
              >
                Informationen :D
              </Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
