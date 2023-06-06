import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

const ContactMap = () => {
  const position = [41.0258336, 21.3079859];

  const mapStyle = {
    height: "400px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  return (
    <div className="w-[50%] h-400px border border-gray-300 rounded-lg">
      <MapContainer center={position} zoom={13} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: markerIcon,
            iconRetinaUrl: markerIconRetina,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
          })}
        >
          <Popup>Gorgi is here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
