import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./App.css";

import { siteTitle } from "./layouts/LayoutDefault";

// import Meta from "./components/elements/Meta";
import BaseRouter from "./routes";

import reducer from "./reducers/index";
import { Provider } from "react-redux";
import { wellProfileApi } from "./services/wellProfile";
import { setupListeners } from "@reduxjs/toolkit/query";
import Meta from "./components/elements/Meta";

const initialState = {};
const middleware = [thunk, wellProfileApi.middleware];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

setupListeners(store.dispatch);
class App extends Component {
  render() {
    return (
      <>
        <Meta
          title={siteTitle}
          preview="Endla develops state-of-the-art purpose specific engineering tools with performance based contracts that provide engineering businesses with a highly attractive return on spend digital tool projects."
          image="/images/spaced-logo.png"
          url="/"
        />
        <Provider store={store}>
          <Router>
            <BaseRouter></BaseRouter>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
