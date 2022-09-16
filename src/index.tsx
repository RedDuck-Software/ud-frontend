/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <MoralisProvider
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL!}
        appId={process.env.REACT_APP_MORALIS_APP_ID!}
      >
        <App />
      </MoralisProvider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
