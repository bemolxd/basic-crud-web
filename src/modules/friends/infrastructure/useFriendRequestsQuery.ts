import { useQuery } from "react-query";

import { api } from "utils";

import { FriendRequest } from "modules/users/application";

export const useFriendRequestsQuery = (
  recipientId?: number,
  senderId?: number
) => {
  const { data } = useQuery("friendRequests", async () => {
    try {
      const { data } = await api.get<FriendRequest[]>(`friends/requests`, {
        params: { recipientId, senderId },
      });
      return data;
    } catch (error) {
      throw error;
    }
  });
  return data;
};
