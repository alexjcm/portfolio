import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { GlobalStyles } from './components/dark-theme/Globalstyle';
import { darkTheme, lightTheme } from './components/dark-theme/Themes';
import { useDarkMode } from './components/dark-theme/useDarkMode';
import MainHome from './components/home/MainHome';
import Projects from './components/projects/Projects';
import CustomParticles from './components/utils/CustomParticles';
import Footer from './components/utils/Footer';
import Navbar from './components/utils/Navbar';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  // const [load, upadateLoad] = useState(true);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // useEffect(() => {
  //   setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1000);
  // }, []);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <CustomParticles />
        <Router>
          {/* <Preloader load={load} /> */}
          {/* <div className="App" id={load ? 'no-scroll' : 'scroll'}> */}
          <div className="App" id="scroll">
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
