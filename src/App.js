import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Privacy } from './pages/Privacy/Privacy';
import { ChameleonCalculator } from './pages/ChameleonCalculator/ChameleonCalculator';
import { Streaks } from './pages/Streaks/Streaks'

function App() {
  return (
    <Switch>
      <Route path="/chameleon-calculator" component={ChameleonCalculator} />
      <Route path="/streaks" component={Streaks} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(App);
