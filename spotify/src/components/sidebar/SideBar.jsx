import React from "react";
import "./sideBar.css";
// import Cards from "./Cards";
import "../responsive-base.css";
const SideBar = () => {
  const Text = [
    "Legal",
    "Security and priviacy Center",
    "privacy policy",
    "cookies",
    "About Ads",
    "Accessibility",
  ];
  return (
    <div className="sideBarMainContainer">
      <div className="sideBarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sidebarMiddleSection1">
        <h1>Create your first playlist</h1>
        <p>it's easy, we"ll help you</p>
        <button class="btn1">Create playlist</button>
      </div>
      <div className="sidebarMiddleSection2">
        <h1>Let's find some posdcasts to follow</h1>
        <p>We"ll keep you updated on new episodes</p>
        <button class="btn2">Browse podcasts</button>
      </div>
      <div className="sidebarBottomSection"></div>
      <div className="sidebarBottomSectionTopConatiner">
        {Text.map((ele) => {
          return <p>{ele}</p>;
        })}{" "}
      </div>
      <div className="sidebarBottomSectionBottomConatiner">
        <p>Cookies</p>
        <button>
          <img
            // clasName="globe"
            src="https://cdn-icons-png.flaticon.com/128/15487/15487699.png"
          />
          English
        </button>
      </div>
    </div>
  );
};

export default SideBar;
