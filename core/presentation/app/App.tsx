import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import routes from "./App.routes";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
      <Redirect to='/' />
    </Router>
  );
};

export default App;
