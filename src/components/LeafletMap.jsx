import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import icon from '../assets/logo/Bhansha-Express-logo.svg'; // Marker icon
import userIcon from '../assets/icon/custom-user-icon.svg';
import { MdGpsFixed } from "react-icons/md";

const LeafletMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef();

  // Pinned locations
  const markers = [
    {
      geocode: [27.477445243217847, 83.46696668007978],
      popUp: "Bhairahawa"
    },
    {
      geocode: [27.685686821484325, 83.43390446133502],
      popUp: "Butwal"
    },
    {
      geocode: [27.61988963583777, 83.47537405609275],
      popUp: "Tilottama"
    },
  ];

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [42, 42],
  });

  const userMarkerIcon = new Icon({
    iconUrl: userIcon,
    iconSize: [42, 42],
  });

  useEffect(() => {
    // Get current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const userLocation = [latitude, longitude];
      setCurrentLocation(userLocation); // Update to the user's location

      if (mapRef.current) {
        mapRef.current.setView(userLocation, 10);
      }
    }, (error) => {
      console.error("Error getting location", error);
    });
  }, []);

  const handleNavigateToUser = () => {
    if (mapRef.current && currentLocation) {
      mapRef.current.setView(currentLocation, 13); // Center the map to user's location
    }
  };

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={currentLocation || [27.620840542090686, 83.47506031658617]}
        zoom={13}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker for current location */}
        {currentLocation && (
          <Marker position={currentLocation} icon={userMarkerIcon}>
            <Popup>Your current location</Popup>
          </Marker>
        )}

        <MarkerClusterGroup chunkedLoading>
          {markers.map((marker, idx) => (
            <Marker key={idx} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>

      {/* Navigation button to the user's location */}
      <button
        onClick={handleNavigateToUser}
        className="absolute bottom-5 right-5 z-[1000] text-blue-500 cursor-pointer"
      >
        <MdGpsFixed size={30} />
      </button>
    </div>
  );
};

export default LeafletMap;
