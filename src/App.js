import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TwitchApp from "./twitch/index.js"
import { Home } from "./home.js"

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/twitch">
          <TwitchApp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;