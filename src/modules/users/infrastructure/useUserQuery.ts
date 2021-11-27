import { useQuery } from "react-query";

import { AxiosError } from "axios";

import { api } from "utils";

import { User } from "modules/users/application";

export const useUserQuery = (userId: number) =>
  useQuery(`users/${userId}`, async () => {
    try {
      const { data } = await api.get<User>(`users/${userId}`);
      return data;
    } catch (error) {
      if ((error as AxiosError).response?.status === 403) {
        return null;
      }
    }
  });
