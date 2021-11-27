import { useQueryClient, useMutation } from "react-query";

import { api } from "utils";

import { AddFriendsPayload } from "modules/friends/application";
import { User, FriendRequest } from "modules/users/application";

export const useAddToFriends = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (payload: AddFriendsPayload) => {
      try {
        const { data } = await api.put<User>("friends/addFriend", payload);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (response, payload) => {
        if (!response) return;

        queryClient.setQueryData([`users/${payload.recipientId}`], (user) => {
          return (user as User).friendsIds?.concat(
            payload.recipientId.toString()
          );
        });

        queryClient.setQueryData(["friendRequests"], (requests) => {
          return (requests as FriendRequest[]).filter(
            (request) => request.id !== payload.requestId
          );
        });
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
