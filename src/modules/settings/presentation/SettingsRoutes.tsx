import { Switch, Route, Redirect } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import { GeneralTab } from "modules/settings/presentation/General";

export const SettingsRoutes = () => (
  <Box maxW="600px" w="100%">
    <Switch>
      <Route exact path="/settings">
        <GeneralTab />
      </Route>
      <Route exact path="/settings/change-password">
        <div>zmień hasło</div>
      </Route>
      <Route exact path="/settings/cookies">
        <div>cookies</div>
      </Route>
      <Route exact path="/settings/privacy">
        <div>prywatność</div>
      </Route>
      <Redirect to="/settings" />
    </Switch>
  </Box>
);
