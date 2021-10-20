import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { v4 as uuid } from "uuid";
import routes from "./Session.routes";

const Session: FunctionComponent = () => {
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
      <Redirect to='/' />
    </>
  );
};

export default Session;
