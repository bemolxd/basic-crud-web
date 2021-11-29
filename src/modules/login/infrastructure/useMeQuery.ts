import { useQuery } from "react-query";

import { api } from "utils";

import { LoginResponse } from "modules/login/application";

export const useMeQuery = () =>
  useQuery("auth/me", async () => {
    try {
      const { data } = await api.get<LoginResponse>("auth/me");
      return data;
    } catch (error) {
      throw error;
    }
  });
