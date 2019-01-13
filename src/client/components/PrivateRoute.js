import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from '../fragments/NotFound';

const PrivateRouteComponent = ({ component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (token ? (<component {...props} />) : (<NotFound />))}
  />
);

const mapStateToProps = ({ userState }) => (userState);

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);