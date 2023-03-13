import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer); // createRoot(rootContainer!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opt-in to Webpack hot module replacement
// if (module.hot) module.hot.accept();
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(<NextApp />);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
