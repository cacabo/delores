import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components';
import Nav from './fragments/nav/Nav';
import SessionModal from './fragments/SessionModal';
import {
  Home,
  App,
  NotFound,
  Hospitals,
  Results,
} from './pages';
import {
  HOME_PATH,
  APP_PATH,
  WILD_PATH,
  HOSPITALS_PATH,
  RESULTS_PATH,
} from './routes';

export default () => (
  <div id="app">
    <Nav />
    <div className="nav-spacer" />

    <Switch>
      <Route exact path={HOME_PATH} component={Home} />

      <PrivateRoute exact path={APP_PATH} component={App} />
      <PrivateRoute exact path={HOSPITALS_PATH} component={Hospitals} />

      {/* todo probably not needed */}
      <PrivateRoute exact path={RESULTS_PATH} component={Results} />

      <Route path={WILD_PATH} component={NotFound} />
    </Switch>

    <SessionModal />
  </div>
);
