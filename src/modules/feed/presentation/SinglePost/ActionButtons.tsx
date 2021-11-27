import { MdDeleteForever, MdEdit } from "react-icons/md";

import { HStack, IconButton, Tooltip } from "@chakra-ui/react";

import { Post, useEditPostModalStore } from "modules/feed/application";
import { useDeletePost } from "modules/feed/infrastructure";

interface IProps {
  post: Post;
}

export const ActionButtons = ({ post }: IProps) => {
  const { mutateAsync, isLoading } = useDeletePost();
  const onOpen = useEditPostModalStore((state) => state.onOpen);

  return (
    <HStack spacing={2}>
      <Tooltip label="Edytuj post">
        <IconButton
          aria-label="delete-post"
          icon={<MdEdit />}
          variant="ghost"
          color="gray.600"
          onClick={() => onOpen(post)}
        />
      </Tooltip>
      <Tooltip label="Usuń post">
        <IconButton
          aria-label="delete-post"
          icon={<MdDeleteForever />}
          variant="ghost"
          color="red"
          colorScheme="red"
          isLoading={isLoading}
          onClick={async () => {
            await mutateAsync(post.id);
          }}
        />
      </Tooltip>
    </HStack>
  );
};
