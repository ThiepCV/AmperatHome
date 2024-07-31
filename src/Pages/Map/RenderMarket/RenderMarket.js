import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";
import MarketInfoModal from "./MarketInfoModal/MarketInfoModal";


const lists = [
  {
    id: 1,
    name: "st123",
    zip: "0001",
    city: "toshima",
    street: "shotengai",
    position: { lat: 35.6764225, lng: 139.650027 },
  },
  {
    id: 2,
    name: "st234",
    zip: "0001",
    city: "toshima",
    street: "shotengai",
    position: { lat: 36.00001, lng: 140.45 },
  },
  {
    id: 3,
    name: "st345",
    zip: "0001",
    city: "toshima",
    street: "shotengai",
    position: { lat: 36.21, lng: 141.65 },
  },
];

const RenderMarket = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);

  const handleClickMarket = (market) => {
    setSelectedMarket(market);
  };

  return (
    <>
      {lists.map((list) => (
        <Marker
          key={list.id}
          position={list.position}
          onClick={() => handleClickMarket(list)}
        />
      ))}
      {selectedMarket && (
        <MarketInfoModal
          market={selectedMarket}
          onClose={() => setSelectedMarket(null)}
        />
      )}
    </>
  );
};

export default RenderMarket;
