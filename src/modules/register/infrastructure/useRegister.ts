import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { api } from "utils";

import { RegisterPayload } from "modules/register/application";
import { LoginResponse } from "modules/login/application";
import { useLogin } from "modules/login/infrastructure";

export const useRegister = () => {
  const [login] = useLogin();

  const { mutateAsync } = useMutation(
    async (payload: RegisterPayload) => {
      try {
        const { data } = await api.post<LoginResponse>("users", payload);
        return data;
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) return null;
      }
    },
    {
      onSuccess: async (response, payload) => {
        if (!response) return;
        await login(payload);
      },
    }
  );

  return [mutateAsync] as const;
};
