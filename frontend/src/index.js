import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <h1>Kimi 🐈 🐾</h1>
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.register();
