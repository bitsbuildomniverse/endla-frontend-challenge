import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layouts
import LayoutDefault from './containers/layouts/Default';

// User-facing components
import Users from './containers/pages/Users';
import Profile from './containers/pages/Profile';
import Account from './containers/pages/Account';

// Non user-facing components
import NotFound from './containers/pages/NotFound';

const BaseRouter = () => (
  <Switch>
    <LayoutDefault>
      <Switch>
        <Route
          exact
          path="/"
          component={Users}
        />
        <Route
          path="/users"
          component={Users}
        />
        <Route
          path="/profile"
          component={Profile}
        />
        <Route
          path="/account"
          component={Account}
        />
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </LayoutDefault>
  </Switch>
);

export default BaseRouter;
