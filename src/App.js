import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Preloader from "./components/utils/Preload";
import Navbar from "./components/utils/Navbar";
import MainHome from "./components/home/MainHome";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/utils/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={MainHome} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
