import React from "react";
import "./artistcard.css";
import { ArtistCardData } from "../../config/config";
import "../responsive-base.css";
const ArtistCard = () => {
  return (
    <div className="ArtistCardMainContainer">
      {ArtistCardData.map((ele) => {
        return (
          <>
            <div className="Artistcard">
              <img src={ele.imgSrc} alt="" />
              <div className="CardTextContainer">
                <h2>{ele.heading}</h2>
                <p>{ele.subHeading}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ArtistCard;
