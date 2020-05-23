import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import About from "./pages/About";
import AddTicket from "./pages/AddTicket";
import Help from "./pages/Help";
import Historic from "./pages/Historic";
import SignUp from "./pages/SignUp";

import Page404 from "./components/Page404";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => isAuthenticated() ? children : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />)
      }
    />
  );
}

const Routes = () => (
  <BrowserRouter>
    <React.Suspense fallback={<h1>carregando...</h1>}>
      <Switch>
        <Route exact path="/"><SignUp /></Route>
        <PrivateRoute path="/add-ticket"><AddTicket /></PrivateRoute>
        <PrivateRoute path="/about"><About /></PrivateRoute>
        <PrivateRoute path="/help"><Help /></PrivateRoute>
        <PrivateRoute path="/historic"><Historic /></PrivateRoute>
        <Route path="*"><Page404 /></Route>
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default Routes;
