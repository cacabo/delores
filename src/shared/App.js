import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/sidebar/Nav';
import Home from './pages/Home';
import App from './pages/App';
import NotFound from './pages/NotFound';

export default () => (
  <div id="app">
    <Nav />
    <div className="nav-spacer" />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);
