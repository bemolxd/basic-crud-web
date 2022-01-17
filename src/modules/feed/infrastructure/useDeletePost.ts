import { useQueryClient, useMutation } from "react-query";

import { api } from "utils";

import { Post } from "modules/feed/application";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (postId: number) => {
      try {
        const { data } = await api.delete(`posts/${postId}`);
        return data;
      } catch (error) {
        throw error;
      }
    },
    {
      onMutate: (postId) => {
        queryClient.setQueryData("posts", (data) =>
          (data as Post[]).filter((post) => post.id !== postId)
        );
      },
    }
  );

  return { mutateAsync, isLoading };
};
