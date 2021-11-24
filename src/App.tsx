import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";

import { MainRoutes } from "containers/MainRoutes";
import { LoginPage } from "containers/LoginPage";
import { Register } from "containers/Register";

import { AuthRoutes } from "components/Auth";
import { LayoutWrapper } from "components/Layout";
import { PageLoading } from "components/Loading";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Switch>
      <Suspense fallback={<PageLoading />}>
        <LayoutWrapper>
          <AuthRoutes>
            <Route component={MainRoutes} path="/" />
          </AuthRoutes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginPage} />
        </LayoutWrapper>
      </Suspense>
    </Switch>
    <ReactQueryDevtools initialIsOpen={false} />
  </ChakraProvider>
);
