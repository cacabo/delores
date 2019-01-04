import React from 'react';

import Map from './map/Map';
import Sidebar from './sidebar/Sidebar';
import Nav from './sidebar/Nav';
import Shade from './sidebar/Shade';

export default () => (
  <div id="app">
    <Nav />
    <div className="nav-spacer" />
    <Shade />
    <div className="flex-container">
      <Sidebar />
      <Map />
    </div>
  </div>
);
