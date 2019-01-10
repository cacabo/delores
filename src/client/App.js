import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <Route exact path={APP_PATH} component={App} />
      <Route exact path={HOSPITALS_PATH} component={Hospitals} />
      <Route exact path={RESULTS_PATH} component={Results} />
      <Route path={WILD_PATH} component={NotFound} />
    </Switch>

    <SessionModal />
  </div>
);
