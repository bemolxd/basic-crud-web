import { useQueryClient, useMutation } from "react-query";

import { api } from "utils";

import { FriendRequest } from "modules/users/application";

export const useSendFriendRequest = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (recipientId: number) => {
      try {
        const { data } = await api.post<FriendRequest>("friends/requests", {
          recipientId,
        });
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      onSuccess: (response) => {
        queryClient.setQueryData("friendRequests", (old) =>
          [response].concat(old as FriendRequest[])
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
