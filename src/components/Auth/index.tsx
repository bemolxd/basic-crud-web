import { IChildrenProp } from "types";

import { withErrorBoundary } from "components/ErrorBoundary";

import { useMeQuery } from "modules/login/infrastructure";

const AuthRoutes = ({ children }: IChildrenProp) => {
  const { data } = useMeQuery();

  return !!data ? <>{children}</> : <></>;
};

const AuthRoutesWithErrorBoundary = withErrorBoundary(AuthRoutes);

export { AuthRoutesWithErrorBoundary as AuthRoutes };
