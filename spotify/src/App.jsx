import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/Footer";
import "./responsive-base.css";
function App() {
  return (
    <div class="mainContainer">
      <NavBar />
      <div class="mainSectinoContetntContainer">
        <SideBar />
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
