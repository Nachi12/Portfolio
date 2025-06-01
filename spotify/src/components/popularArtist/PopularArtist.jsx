import React from "react";
import "./popularArtist.css";
import ArtistCard from "../artistCard/ArtistCard";
import "../responsive-base.css";
const PopularArtist = () => {
  return (
    <div className="popularArtistMainContainer">
      <span>PopularArtist</span>
      <ArtistCard />
    </div>
  );
};

export default PopularArtist;
