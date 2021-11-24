import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { api } from "utils";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { push } = useHistory();

  const { mutateAsync } = useMutation(
    async () => {
      return await api.get("auth/logout");
    },
    {
      onSuccess: (response) => {
        if (!response) return;
        queryClient.invalidateQueries("auth/me");
      },
      onSettled: () => {
        push("/login");
      },
    }
  );

  return [mutateAsync];
};
