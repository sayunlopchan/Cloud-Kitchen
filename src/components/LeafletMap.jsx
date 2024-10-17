import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MdGpsFixed } from "react-icons/md";




// icons
import userIcon from '../assets/icon/custom-user-icon.svg';
import icon from '../assets/logo/Bhansha-Express-logo.svg';




const LeafletMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef();

  // Pinned locations
  const markers = [
    {
      geocode: [27.663250, 83.457750],
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
      mapRef.current.setView(currentLocation, 13);
    }
  };

  return (
    <div className="relative h-[400px] w-full">
      <MapContainer
        center={currentLocation}
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
