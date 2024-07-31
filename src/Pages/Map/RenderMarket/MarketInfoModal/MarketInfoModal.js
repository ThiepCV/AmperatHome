import React, { useEffect, useState } from 'react';
import "./MarketInfoModal.css"

const MarketInfoModal = ({ market, onClose }) => {

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Lấy vị trí hiện tại của người dùng
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const getGoogleMapsDirectionsUrl = () => {
    if (!userLocation) return "#";

    const origin = `${userLocation.lat},${userLocation.lng}`;
    const destination = `${market.position.lat},${market.position.lng}`;
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  };

  return (
    <div className='modal show'
    //  style={{  position: "fixed",
    //   left: 0,
    //   bottom: 0,
    //   width: "100%",
    //   height: "100%",
    //   overflow: "auto",
    
    //   backgroundColor: "rgba(0,0,0,0.4)"
    //   }}
    > 
    <div className='modal-content'
  //    style={{ backgroundColor: "#fefefe",
  // margin: "15% auto",
  // padding: "20px",
  // border: "1px solid #888",
  // width: "80%"  }}
  >

      <h2>{market.name}</h2>
      <p>Zip: {market.zip}</p>
      <p>City: {market.city}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <p>Street: {market.street}</p>
      <button onClick={onClose}>Close</button>
      <a  href={getGoogleMapsDirectionsUrl()} target="_blank" rel="noopener noreferrer">
          メート案内
        </a>
    </div>
    </div>
  );
};

export default MarketInfoModal;
