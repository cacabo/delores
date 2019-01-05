import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/sidebar/Nav';
import {
  Home,
  App,
  NotFound,
  Hospitals,
} from './pages';
import {
  HOME_PATH,
  APP_PATH,
  WILD_PATH,
  HOSPITALS_PATH,
} from './routes';

export default () => (
  <div id="app">
    <Nav />
    <div className="nav-spacer" />

    <Switch>
      <Route exact path={HOME_PATH} component={Home} />
      <Route exact path={APP_PATH} component={App} />
      <Route exact path={HOSPITALS_PATH} component={Hospitals} />
      <Route path={WILD_PATH} component={NotFound} />
    </Switch>
  </div>
);
