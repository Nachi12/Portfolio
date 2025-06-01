import React from "react";
import "./mainSection.css";
import TrendingSection from "../trendingSection/TrendingSection";
import PopularArtist from "../popularArtist/PopularArtist";
import "../responsive-base.css";

const MainSection = () => {
  return (
    <main class="mainSection">
      <TrendingSection />
      <PopularArtist />
    </main>
  );
};

export default MainSection;
