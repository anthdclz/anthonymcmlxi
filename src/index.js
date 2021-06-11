import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Comfortaa:wght@400;600', 'Poppins:wght@400;600']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);