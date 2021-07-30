import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HeroSection from "../components/index";
import Navbar from "../components/Menu/index";
import Footer from "../components/Footer/index";
import { ThemeChanger } from "./components/DarkMode/ThemeStyles";

const Home = () => {
  return (
    <Router>
      <ThemeProvider>
        <ThemeChanger>
          <Navbar />
          <HeroSection />
          <Footer />
        </ThemeChanger>
      </ThemeProvider>
    </Router>
  );
};

export default Home;
