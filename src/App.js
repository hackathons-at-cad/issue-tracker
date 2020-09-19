import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Issue, Issues, Login, Signup } from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/issues" component={Issues} />
          <Route path="/issue" component={Issue} />
          <Route path="/register" component={Signup} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
