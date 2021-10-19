import React from "react";
import { render } from "@testing-library/react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { v4 as uuid } from "uuid";
import routes from "./App.routes";

test("redirects to / page", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
      <Redirect to='/' />
    </Router>
  );
  expect(history.location.pathname).toBe("/");
});
