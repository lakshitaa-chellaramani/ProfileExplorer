import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [30, 30],
});



const InteractiveMap = ({ profiles }) => {
  return (
    <div> 
    <h2 style={{ textAlign: "center", fontFamily: "Roboto"}}>Profiles on Map</h2>
    <div style={{ height: "500px", width: "100%", marginTop: "2rem" }}>
      <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: "100%", width: "100%" }}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for Profiles */}
        {profiles.map((profile) => (
          <Marker key={profile.id} position={profile.coordinates}>
            {/* <Marker position={profile.coordinates} icon={customIcon} /> */}
            <Popup>
        <div>
            <strong>{String(profile.name)}</strong>
            <p>{String(profile.description)}</p>
        </div>
        </Popup>

          </Marker>
        ))}
      </MapContainer>
    </div>
    </div>
  );
};

export default InteractiveMap;
