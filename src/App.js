import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query';

import reducer from './reducers';
import { wellProfileApi } from './services/wellProfile';

import BaseRouter from './routes';
import Meta from './components/Meta';

import { META_DATA } from './constants/index';

import './App.scss';

// Redux
const initialState = {};
const middleware = [thunk, wellProfileApi.middleware];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

setupListeners(store.dispatch);
const App = () => {
  console.error(META_DATA.SITE_TITLE);
  return (
    <>
      <Meta
        title={META_DATA.SITE_TITLE}
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
};

export default App;
