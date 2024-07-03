import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Fixing the default icon issue with Leaflet when used with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const LocationMarker = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location.lat && location.lng) {
      map.flyTo([location.lat, location.lng], 13);
    }
  }, [location, map]);

  return (
    location.lat && location.lng ? (
      <Marker position={[location.lat, location.lng]}>
        <Popup>
          Current Location
        </Popup>
      </Marker>
    ) : null
  );
};

const Geolocation = ({ onLocationChange }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setLocation(newLocation);
      onLocationChange(newLocation);
    });
  }, [onLocationChange]);

  return (
    <MapContainer style={containerStyle} center={[location.lat, location.lng]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker location={location} />
    </MapContainer>
  );
};

export default Geolocation;
