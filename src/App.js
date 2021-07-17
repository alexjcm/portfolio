import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'styled-components';

import Preloader from './components/utils/Preload';
import Navbar from './components/utils/Navbar';
import MainHome from './components/home/MainHome';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/utils/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import CustomParticles from './components/utils/CustomParticles';

import {useDarkMode} from './components/dark-theme/useDarkMode';
import {GlobalStyles} from './components/dark-theme/Globalstyle';
import {lightTheme, darkTheme} from './components/dark-theme/Themes';
import './App.css';

function App() {
  const [load, upadateLoad] = useState(true);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1000);
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <CustomParticles />
        <Router>
          <Preloader load={load} />
          <div className="App" id={load ? 'no-scroll' : 'scroll'}>
            <Navbar theme={theme} toggleTheme={themeToggler} />
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
      </>
    </ThemeProvider>
  );
}

export default App;
