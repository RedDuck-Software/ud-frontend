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
        serverUrl="https://s3jkkgvi79jc.usemoralis.com:2053/server"
        appId="w6lNar7mUnKjVtrYnnB1AdbO6F5juFIbpELXP1cO"
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
