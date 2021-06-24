import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  path?: string;
  exact?: boolean;
}
export default function PrivateRoute({
  children,
  path,
  exact,
}: PrivateRouteProps) {
  const condition = localStorage.getItem('token');
  return condition && condition !== '' ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/sign-in" />
  );
}
