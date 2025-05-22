import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const baseContainerStyle = {
  width: "100%",
  borderRadius: '15px',
  overflow: 'hidden',
};

const center = {
  lat: 29.89993428613175,
  lng: 72.35259870019031,
};

const Map = () => {

  const [height, setHeight] = useState('400px');

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth < 768 ? '200px' : '400px');
    };
    updateHeight(); 
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const mapContainerStyle = {
    ...baseContainerStyle,
    height,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBs9rGNv2ed2_VbvC5U7SJI3bRoZnemvWA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}


export default Map