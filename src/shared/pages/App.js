import React from 'react';
import Map from '../components/map/Map';
import Sidebar from '../components/sidebar/Sidebar';
import Shade from '../components/sidebar/Shade';

export default () => (
  <>
    <Shade />
    <div className="flex-container">
      <Sidebar />
      <Map />
    </div>
  </>
);
