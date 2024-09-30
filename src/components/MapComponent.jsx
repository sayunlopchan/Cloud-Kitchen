import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const defaultCenter = {
  lat: 27.483272,  // Latitude for Siddharthanagar
  lng: 83.450820,  // Longitude for Siddharthanagar
};

// Accept props for locations and user location
const MapComponent = ({ locations, userLocation }) => {
  return (
    <div className="h-[400px] w-full bg-gray-400">
      <LoadScript googleMapsApiKey="AIzaSyBT3dw4ffodbLOQYw0T1C-SFqPTyaojx9k">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={12}>
          {/* Mark takeout locations */}
          {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} label={location.name} />
          ))}

          {/* User's location if available */}
          {userLocation && (
            <Marker
              position={userLocation}
              label="You"
              icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
