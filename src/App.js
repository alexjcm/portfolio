import React, { useState, useEffect } from "react";
import Preloader from "./components/Preload";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainHome from "./components/home/MainHome";
import About from "./components/about/About";
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

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