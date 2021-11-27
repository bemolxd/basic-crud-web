import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { EditPostPayload, Post } from "modules/feed/application";

export const useEditPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    "posts",
    async (payload: EditPostPayload) => {
      try {
        const { id, ...body } = payload;
        const { data } = await api.put<Post>(`posts/${id}`, body);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      onSuccess: (response) => {
        queryClient.setQueryData("posts", (posts) => {
          return (posts as Post[]).map((post) => {
            if (post.id === response?.id) {
              return response;
            }
            return post;
          });
        });
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
