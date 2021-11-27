import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { NewPostPayload, Post } from "modules/feed/application";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (payload: NewPostPayload) => {
      try {
        const { data } = await api.post<Post>("posts", payload);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      onSuccess: (response) => {
        queryClient.setQueryData("posts", (old) =>
          [response].concat(old as Post[])
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
