import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/index.css';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyRouter from './components/Nav/Router'
// import * as serviceWorker from './serviceWorker';
import index from './redux/index'


render(
  <Provider store={store}>
    <MyRouter />
  </Provider>,
  document.getElementById("root")
);
