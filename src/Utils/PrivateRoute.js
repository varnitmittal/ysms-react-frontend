import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = getToken() ? true : false;

  if (!isAuth) {
    sessionStorage.setItem('fallback', rest.path);
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
