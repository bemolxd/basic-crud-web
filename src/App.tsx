import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";

import { MainRoutes } from "containers/MainRoutes";
import { LoginPage } from "containers/LoginPage";

import { AuthRoutes } from "components/Auth";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <AuthRoutes>
          <Route component={MainRoutes} path="/" />
        </AuthRoutes>
        <Route path="/login" component={LoginPage} />
      </Suspense>
    </Switch>
    <ReactQueryDevtools initialIsOpen={false} />
  </ChakraProvider>
);
