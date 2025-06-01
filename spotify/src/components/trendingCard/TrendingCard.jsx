import React from "react";
import "./trendingCard.css";
import { TrendingCardData } from "../../config/config";
import "../responsive-base.css";
const TrendingCard = () => {
  return (
    <>
      <div className="trendingCardMainContainer">
        {TrendingCardData.map((ele) => {
          return (
            <>
              <div className="cardContainer">
                <img src={ele.img} alt="" />
                <div className="CardTextContainer">
                  <h2>{ele.name}</h2>
                  <p>{ele.sub}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TrendingCard;
