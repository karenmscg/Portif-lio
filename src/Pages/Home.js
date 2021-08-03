import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Menu";

const Home = () => {

  const [menuToggle, setMenuToggle] = useState(false)

  const toggle = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <div> 
     <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
