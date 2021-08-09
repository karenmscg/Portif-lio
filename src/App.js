import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/works" component={Works} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
