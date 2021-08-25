import React from 'react';
import ReactDOM from 'react-dom';
//The provider is a function from react redux that allows to use redux in all of our nested components
import { Provider } from 'react-redux'
import reduxStore from './reduxStore';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
