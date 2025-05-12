import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: '15px', // Add border-radius here
  overflow: 'hidden'
};

const center = {
  lat: 29.89993428613175, // latitude 
  lng: 72.35259870019031, // longitude 
};

const Map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBs9rGNv2ed2_VbvC5U7SJI3bRoZnemvWA">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map