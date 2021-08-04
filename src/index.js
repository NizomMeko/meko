import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App meko="WebBrain"/>
    <App meko="PDP"/>
    <App meko="IT"/>
    <App meko="Code" />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
