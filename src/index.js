import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './css/index.css';
import './css/nav.css';

import './css/init.css'
import './css/ProducrPage.css'
import App from './App';
import store from './store';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  
      <App />
   
    
  </Provider>
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
