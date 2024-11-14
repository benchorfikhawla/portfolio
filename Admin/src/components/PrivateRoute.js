// /frontend-admin/src/components/PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token"); // Vérifie si l'utilisateur est authentifié

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace /> // Redirige vers la page de login si non authentifié
        )
      }
    />
  );
};

export default PrivateRoute;
