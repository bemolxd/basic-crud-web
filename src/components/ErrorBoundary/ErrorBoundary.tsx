import { ComponentType } from "react";
import {
  ErrorBoundary as Boundary,
  ErrorBoundaryPropsWithFallback,
} from "react-error-boundary";

import { IChildrenProp } from "types";

import { ErrorStrategy } from "./ErrorStrategy";

export interface Fallback<ErrorType> {
  error: ErrorType;
}

export type ErrorFallback<ErrorType> = ComponentType<Fallback<ErrorType>>;

interface ErrorBoundaryProps<ErrorType> {
  onResetKeysChange?: ErrorBoundaryPropsWithFallback["onResetKeysChange"];
  onReset?: () => void;
  onError?: (
    error: Error,
    info: {
      componentStack: string;
    }
  ) => void;
  fallback?: ErrorFallback<ErrorType> | React.ReactElement<any, any>;
  resetKeys?: Array<any>;
}

export interface IErrorBoundaryProps<ErrorType>
  extends ErrorBoundaryProps<ErrorType>,
    IChildrenProp {}

export const ErrorBoundary = <ErrorType extends Error>({
  onResetKeysChange,
  onReset,
  onError,
  fallback = ErrorStrategy,
  resetKeys,
  children,
}: IErrorBoundaryProps<ErrorType>) => {
  return (
    <Boundary
      onResetKeysChange={onResetKeysChange}
      onReset={onReset}
      onError={onError}
      FallbackComponent={fallback as any}
      resetKeys={resetKeys}
    >
      {children}
    </Boundary>
  );
};
