import React from "react";
import { useFormContext } from "react-hook-form";
import { Box, Input, Stack, Textarea } from "@chakra-ui/react";

import { EditPostPayload } from "modules/feed/application";

interface IProps {
  post: EditPostPayload;
}

export const EditPostForm = ({ post }: IProps) => {
  const { register } = useFormContext<EditPostPayload>();

  return (
    <Box w="100%">
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack>
          <Input
            defaultValue={post.title}
            borderRadius="lg"
            {...register("title")}
          />
          <Textarea
            defaultValue={post.body}
            borderRadius="lg"
            {...register("body")}
          />
        </Stack>
      </form>
    </Box>
  );
};
