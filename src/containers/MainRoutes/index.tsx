import { Redirect, Route, Switch } from "react-router-dom";

import { Feed } from "containers/Feed";
import { Settings } from "containers/Settings";
import { UserPage } from "containers/UserPage";
import { UsersPage } from "containers/Users";

export const MainRoutes = () => (
  <Switch>
    <Route path="/feed" exact component={Feed} />
    <Route path="/users" exact component={UsersPage} />
    <Route path="/user/:userId" component={UserPage} />
    <Route path="/settings" component={Settings} />
    <Redirect to="/feed" />
  </Switch>
);
