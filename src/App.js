import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Privacy } from './pages/Privacy/Privacy';
import { ChameleonCalculator } from './pages/ChameleonCalculator/ChameleonCalculator';

function App() {
  return (
    <Switch>
      <Route path="/chameleon-calculator" component={ChameleonCalculator} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(App);
