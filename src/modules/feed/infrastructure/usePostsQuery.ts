import { useQuery } from "react-query";

import { api } from "utils";

import { Post } from "modules/feed/application";

export const usePostsQuery = (authorId?: number) =>
  useQuery("posts", async () => {
    try {
      const { data } = await api.get<Post[]>("posts", { params: { authorId } });
      return data;
    } catch (error) {
      throw error;
    }
  });
