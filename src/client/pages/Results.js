import React from 'react';
import ResultsComponent from '../fragments/results/Results';
import Sidebar from '../fragments/sidebar/Sidebar';
import Shade from '../fragments/sidebar/Shade';

// TODO probably not needed

export const Results = () => (
  <>
    <Shade />
    <div className="flex-container">
      <Sidebar />
      <ResultsComponent />
    </div>
  </>
);
