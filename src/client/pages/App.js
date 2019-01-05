import React from 'react';
import Map from '../fragments/map/Map';
import Sidebar from '../fragments/sidebar/Sidebar';
import Shade from '../fragments/sidebar/Shade';

export const App = () => (
  <>
    <Shade />
    <div className="flex-container">
      <Sidebar />
      <Map />
    </div>
  </>
);
