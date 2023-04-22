import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import 'react-tooltip/dist/react-tooltip.css'

import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../components/dark-theme/Globalstyle';
import { darkTheme, lightTheme } from '../components/dark-theme/Themes';
import { useDarkMode } from '../components/dark-theme/useDarkMode';
import CustomParticles from '../components/utils/CustomParticles';
import Footer from '../components/utils/Footer';
import Navbar from '../components/utils/Navbar';

export default function App({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <CustomParticles />
          <div id="scroll">
            <Navbar theme={theme} toggleTheme={themeToggler} />            
          </div>
        </>
        <Head>
          <title>Portfolio | AJ</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
