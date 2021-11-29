import { memo } from "react";
import { Redirect } from "react-router-dom";

import { AxiosError } from "axios";

import { Fallback } from "./ErrorBoundary";

interface IProps extends Fallback<Error> {
  resetErrorBoundary(...args: unknown[]): void;
}

export const ErrorStrategy = memo(({ error }: IProps) => {
  switch ((error as AxiosError).response?.status) {
    case 401:
      console.log("mamy 401");
      return <Redirect to="/login" />;
    default:
      return <h1>error</h1>;
  }
});
