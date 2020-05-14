import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/SignUp"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/app", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <React.Suspense fallback={<h1>carregando...</h1>}>
      <Switch>
        <HomeRoute exact path="/" component={SignUp} />
        <PrivateRoute path="/app" component={() => <h1>App</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default Routes;
