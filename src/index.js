import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import axios from 'axios';

axios.defaults.baseURL = 'https://603ca9ecf4333a0017b680f8.mockapi.io/api/v1';
axios.defaults.headers.post = {'Accept': 'application/json', 'Content-Type': 'application/json',}
axios.defaults.headers.put = {'Accept': 'application/json', 'Content-Type': 'application/json',}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);