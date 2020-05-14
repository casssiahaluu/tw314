import React from "react";
import Routes from "./routes";
import * as serviceWorker from './serviceWorker';

import { Global } from "./styles/global";

const App = () => <Routes><Global /></Routes>;
export default App;

serviceWorker.register();