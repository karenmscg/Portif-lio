import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Menu";
import SideBar from "../components/SideBar";

const Home = () => {

  const [menuToggle, setMenuToggle] = useState(false)

  const toggle = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <div> 
     <Navbar />
      <SideBar menuToggle = {menuToggle} toggle = {toggle}/>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
