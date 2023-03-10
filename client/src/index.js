import 'popper.js/dist/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';

import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

import 'boxicons';
import 'mdi-icons/css/materialdesignicons.min.css';
import '@mdi/font/css/materialdesignicons.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

