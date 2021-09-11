import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "utils";

import { Post } from "modules/feed/application";

export const usePostsQuery = () =>
  useQuery("posts", async () => {
    try {
      const { data } = await api.get<Post[]>("posts");
      return data;
    } catch (error) {
      if ((error as AxiosError).response?.status === 403) {
        return null;
      }
    }
  });
