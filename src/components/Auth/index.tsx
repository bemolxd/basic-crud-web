import React from "react";
import { Redirect } from "react-router-dom";
import { IChildrenProp } from "types";

import { useMeQuery } from "modules/login/infrastructure";

export const AuthRoutes = ({ children }: IChildrenProp) => {
  const { data } = useMeQuery();

  return data?.id ? (
    <>{children}</>
  ) : (
    <>
      <Redirect to="/login" />
    </>
  );
};
