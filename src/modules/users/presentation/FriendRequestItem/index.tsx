import React from "react";
import {
  MenuItem,
  Box,
  Stack,
  Avatar,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { dayjs } from "utils";

import { FriendRequest } from "modules/users/application";
import { useUserQuery } from "modules/users/infrastructure";
import {
  useDeleteFriendRequest,
  useAddToFriends,
} from "modules/friends/infrastructure";

interface IProps {
  request: FriendRequest;
}

export const FriendRequestItem = ({ request }: IProps) => {
  const { data: sender } = useUserQuery(request.senderId);
  const [deleteRequest, isDeleting] = useDeleteFriendRequest();
  const [addFriend, isAccepting] = useAddToFriends();

  return (
    <MenuItem maxW="400px" w="100%">
      <Box p={2}>
        <Stack spacing={2}>
          <HStack>
            <Avatar size="xs" />
            <Text size="xs" isTruncated maxW="300px" w="100%">
              {sender?.username} zaprasza Cię do znajomych
            </Text>
          </HStack>
          <Text fontSize="sm">{dayjs(request.created_at).fromNow()}</Text>
          <HStack spacing={4}>
            <Button
              size="sm"
              colorScheme="teal"
              variant="outline"
              isLoading={isAccepting}
              onClick={async () =>
                await addFriend({
                  requestId: request.id,
                  recipientId: request.recipientId,
                  senderId: request.senderId,
                })
              }
            >
              Akceptuj
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              variant="ghost"
              isLoading={isDeleting}
              onClick={async () => await deleteRequest(request.id)}
            >
              Odrzuć
            </Button>
          </HStack>
        </Stack>
      </Box>
    </MenuItem>
  );
};
