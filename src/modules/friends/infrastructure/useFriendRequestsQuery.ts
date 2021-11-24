import { useQuery } from "react-query";
import { AxiosError } from "axios";
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
      if ((error as AxiosError).response?.status === 403) {
        return null;
      }
    }
  });
  return data;
};
