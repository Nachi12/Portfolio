import React from "react";
import "./footer.css";
import "../responsive-base.css";
const Footer = () => {
  return (
    <div className="footerSectionMainContainer">
      <div className="footerSectionContent">
        <h1>Preview of Spotify</h1>
        <p>
          Sign up to get unlimited songs and posdcasts with occasional ads.No
          credit card needed
        </p>
      </div>
      <button class="btn">Sign up Free</button>
    </div>
  );
};
export default Footer;
