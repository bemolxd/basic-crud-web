import { useQueryClient, useMutation } from "react-query";
import { api } from "utils";
import { FriendRequest } from "modules/users/application";

export const useDeleteFriendRequest = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (requestId: number) => {
      try {
        const { data } = await api.delete(`friends/requests/${requestId}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (response, requestId) => {
        if (!response) return;
        queryClient.setQueryData("friendRequests", (old) =>
          (old as FriendRequest[]).filter((request) => request.id !== requestId)
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
