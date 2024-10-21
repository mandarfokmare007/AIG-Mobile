import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Add type assertion
);

if ((window as any).cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    },
    false
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Start measuring performance
reportWebVitals();
