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

import { APP } from './constants/index';

// import './App.scss';

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
  return (
    <>
      <Meta
        title={APP.TITLE}
        preview={APP.META.DESCRIPTION}
        image={APP.URL + APP.META.IMAGE}
        url={APP.URL}
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
