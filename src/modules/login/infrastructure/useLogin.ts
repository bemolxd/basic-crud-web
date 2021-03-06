import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router";

import { AxiosError } from "axios";

import { api } from "utils";

import { LoginPayload, LoginResponse } from "modules/login/application";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { push } = useHistory();

  const { mutateAsync } = useMutation(
    async (payload: LoginPayload) => {
      try {
        const { data } = await api.post<LoginResponse>("auth/login", payload);
        return data;
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) return null;
      }
    },
    {
      onSuccess: (response) => {
        queryClient.setQueryData(["auth/me"], response);
        if (!!response) push("/");
      },
    }
  );

  return [mutateAsync];
};
