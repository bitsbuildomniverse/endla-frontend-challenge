import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LayoutDefault from './layouts/LayoutDefault';

import NotFound from './containers/NotFound';
import AccountSettings from './containers/AccountSettings';

const BaseRouter = () => (
  <Switch>
    <LayoutDefault>
      <Switch>
        <Route
          path="/"
          component={AccountSettings}
        />
        <Route component={NotFound} />
      </Switch>
    </LayoutDefault>
  </Switch>
);

export default BaseRouter;
