import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Feed } from "containers/Feed";
import { UsersPage } from "containers/Users";
import { UserPage } from "containers/UserPage";
import { Settings } from "containers/Settings";

export const MainRoutes = () => (
  <Switch>
    <Route path="/feed" exact component={Feed} />
    <Route path="/users" exact component={UsersPage} />
    <Route path="/user/:userId" component={UserPage} />
    <Route path="/settings" component={Settings} />
    <Redirect to="/feed" />
  </Switch>
);
