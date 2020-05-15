import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/SignUp"

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
        <PrivateRoute path="/app"><h1>App</h1></PrivateRoute>
        <Route path="*"><h1>Page not found</h1></Route>
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default Routes;
