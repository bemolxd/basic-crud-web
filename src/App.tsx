import { Suspense } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Switch } from "react-router-dom";

import { ChakraProvider, theme } from "@chakra-ui/react";

import { LoginPage } from "containers/LoginPage";
import { MainRoutes } from "containers/MainRoutes";
import { Register } from "containers/Register";

import { AuthRoutes } from "components/Auth";
import { ErrorBoundary } from "components/ErrorBoundary";
import { LayoutWrapper } from "components/Layout";
import { PageLoading } from "components/Loading";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <LayoutWrapper>
            <AuthRoutes>
              <Route component={MainRoutes} path="/" />
            </AuthRoutes>
          </LayoutWrapper>
        </Suspense>
        <Route path="/register" component={Register} />
        <Route path="/login" component={LoginPage} />
      </ErrorBoundary>
    </Switch>
    <ReactQueryDevtools initialIsOpen={false} />
  </ChakraProvider>
);
