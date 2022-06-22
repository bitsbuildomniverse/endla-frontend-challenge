import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layouts
import DefaultLayout from './containers/layouts/Default';

// User-facing components
import Users from './containers/pages/Users';

// Non user-facing components
import NotFound from './containers/pages/NotFound';

const BaseRouter = () => (
  <Switch>
    <DefaultLayout>
      <Switch>
        <Route
          path="/"
          component={Users}
        />
        <Route component={NotFound} />
      </Switch>
    </DefaultLayout>
  </Switch>
);

export default BaseRouter;
