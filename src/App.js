import React from "react";
import Routes from "./routes";
import * as serviceWorker from './serviceWorker';

import { Global } from "./styles/global";

const App = () => (
  <React.Fragment>
    <Global />
    <Routes />
  </React.Fragment>
);
export default App;

serviceWorker.register();