import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import allReducers from "./reducers/index.";
import WebPage from "./components/WebPage";
import {Provider} from "react-redux";
import ShowCustomers from "./components/ShowCustomers";
import {composeWithDevTools} from "@reduxjs/toolkit/src/devtoolsExtension";
import {thunk} from "redux-thunk";

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
          <WebPage />
          <ShowCustomers />
      </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
