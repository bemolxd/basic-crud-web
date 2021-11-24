import { useMutation, useQueryClient } from "react-query";
import { api } from "utils";

import { EditUserPayload } from "modules/settings/application";
import { User } from "modules/users/application";

export const useEditUserDetails = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (payload: EditUserPayload) => {
      try {
        const { userId, ...user } = payload;
        const { data } = await api.put<User>(`users/${userId}`, user);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      onSuccess: (response) => {
        queryClient.setQueryData(`users/${response!.id}`, (old) => {
          const user = old as User;
          return {
            ...user,
            username: response?.username,
            email: response?.email,
          };
        });

        queryClient.invalidateQueries(`users/${response!.id}`);
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
