import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HairProvider from './context/hair-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HairProvider>
      <App />
    </HairProvider>
  </React.StrictMode>
);


