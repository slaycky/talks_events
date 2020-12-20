import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'constants/urls';
import Home from 'pages/home';
import NotFound from 'pages/notFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact={true} component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
