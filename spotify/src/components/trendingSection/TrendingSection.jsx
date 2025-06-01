import React from "react";
import "./trendingSection.css";
import TrendingCard from "../trendingCard/TrendingCard";
import "../responsive-base.css";
const TrendingSection = () => {
  return (
    <div className="trendingSectionMainContainer">
      <span>Trending Songs</span>
      <TrendingCard />
    </div>
  );
};

export default TrendingSection;
