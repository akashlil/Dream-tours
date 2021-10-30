import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../context/useAuth";

const PriveateRoute = ({ children, ...rest }) => {
  const { user, loadData } = useAuth();
  if (loadData) {
    return (
      <div className="row">
        <div class="spinner-border text-success mx-auto" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PriveateRoute;
