import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Feed } from "containers/Feed";
import { UsersPage } from "containers/Users";

export const MainRoutes = () => (
  <Switch>
    <Route path="/feed" exact component={Feed} />
    <Route path="/users" exact component={UsersPage} />
    <Route path="/user/:userId" />
    <Redirect to="/feed" />
  </Switch>
);
