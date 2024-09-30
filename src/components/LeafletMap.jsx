import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import icon from '../assets/logo/Bhansha-Express-logo.svg'; // Marker icon
import userIcon from '../assets/icon/custom-user-icon.svg';
import { MdGpsFixed } from "react-icons/md";

const LeafletMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null); // Start with null location
  const [closestMarker, setClosestMarker] = useState(null);
  const mapRef = useRef(); // Reference to the map instance

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
      popUp: "Tilotama"
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

  const getClosestMarker = () => {
    if (!currentLocation) return; // Exit if current location is not set

    let closest = null;
    let minDistance = Infinity;

    markers.forEach((marker) => {
      const distance = calculateDistance(currentLocation, marker.geocode);
      if (distance < minDistance) {
        minDistance = distance;
        closest = marker;
      }
    });

    setClosestMarker(closest);
  };

  const calculateDistance = (coord1, coord2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (coord2[0] - coord1[0]) * (Math.PI / 180);
    const dLon = (coord2[1] - coord1[1]) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1[0] * (Math.PI / 180)) *
      Math.cos(coord2[0] * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  useEffect(() => {
    // Get current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const userLocation = [latitude, longitude];
      setCurrentLocation(userLocation); // Update to the user's location

      if (mapRef.current) {
        mapRef.current.setView(userLocation, 13); // Center map to user's location
      }
    }, (error) => {
      console.error("Error getting location", error);
    });
  }, []);

  useEffect(() => {
    getClosestMarker();
  }, [currentLocation]);

  useEffect(() => {
    if (closestMarker && mapRef.current) {
      mapRef.current.setView(closestMarker.geocode, 13); // Center map on the nearest marker
    }
  }, [closestMarker]);

  const handleNavigateToUser = () => {
    if (mapRef.current && currentLocation) {
      mapRef.current.setView(currentLocation, 13); // Center the map to user's location
    }
  };

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={currentLocation || [27.620840542090686, 83.47506031658617]} // Default view if currentLocation is null
        zoom={currentLocation ? 13 : 5} // Zoom level when location is not yet determined
        ref={mapRef} // Assigning the ref to the map container
        style={{ height: "100vh", width: "100%" }} // Ensuring map takes full height and width
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

        {/* Conditionally render the nearest marker if it's not already in the cluster */}
        {closestMarker && !markers.some(marker =>
          marker.geocode[0] === closestMarker.geocode[0] &&
          marker.geocode[1] === closestMarker.geocode[1]
        ) && (
            <Marker position={closestMarker.geocode} icon={customIcon}>
              <Popup>
                Nearest
              </Popup>
            </Marker>
          )}
      </MapContainer>

      {/* Navigation button to the user's location */}
      <button
        onClick={handleNavigateToUser}
        className="absolute bottom-5 right-5 z-[1000] text-blue-500">
        <MdGpsFixed size={30} />
      </button>
    </div>
  );
};

export default LeafletMap;
