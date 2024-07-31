import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Link } from 'react-router-dom';

import "@reach/combobox/styles.css";
import PlacesAutocomplete from "../PlacesAutocomplete/PlacesAutocomplete";
import RenderMarket from "../RenderMarket/RenderMarket";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDhEIliWrzOT6fT9kNFbovJZlGUCz4TfDA",
    libraries,
    loading: "async",
  });
 
  const [selected, setSelected] = useState({ lat: 35.45, lng: 139.49 });
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;
const handleBackHome=()=>{

}
  return (
    <div>
      <div style={{
        
        display:"flex",
        alignContent:"space-around"


      }}>
      <PlacesAutocomplete setSelected={setSelected}/>
      <div>
     <button ><Link to="/">ホーム戻り</Link></button>
      </div>
      </div>
    
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={selected}>
        <RenderMarket />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
