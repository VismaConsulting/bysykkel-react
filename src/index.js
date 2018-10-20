import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import configureStore from './store';

import './index.css';
import App from './App';
import MinSide from './MinSide';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
