import { useQuery } from "react-query";

import { AxiosError } from "axios";

import { api } from "utils";

import { User, UserQueryParams } from "modules/users/application";

export const useUsersQuery = (params?: UserQueryParams) =>
  useQuery("users", async () => {
    try {
      const { data } = await api.get<User[]>("users", { params });
      return data;
    } catch (error) {
      if ((error as AxiosError).response?.status === 403) {
        return null;
      }
    }
  });
