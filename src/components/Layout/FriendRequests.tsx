import { MdPeople } from "react-icons/md";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  HStack,
} from "@chakra-ui/react";

import { useFriendRequestsQuery } from "modules/friends/infrastructure";
import { useMeQuery } from "modules/login/infrastructure";
import { FriendRequestItem } from "modules/users/presentation/FriendRequestItem";

export const FriendRequests = () => {
  const { data: me } = useMeQuery();
  const requests = useFriendRequestsQuery();

  const filteredRequests = requests!
    .filter((req) => req.recipientId === me?.id)
    .slice(0, 5);

  if (!me) return null;

  return (
    <Menu closeOnSelect={false} autoSelect={false}>
      <MenuButton
        as={IconButton}
        icon={<MdPeople />}
        borderRadius="full"
        variant="ghost"
      />
      <MenuList>
        {filteredRequests.length !== 0 ? (
          <>
            {filteredRequests.map((request) => (
              <FriendRequestItem key={request.id} request={request} />
            ))}
            <HStack justify="flex-end" mr={2}>
              <Text as="i" textColor="blue.500" size="xs">
                Wyświetl więcej
              </Text>
            </HStack>
          </>
        ) : (
          <Text mx={4}>Brak zaproszeń</Text>
        )}
      </MenuList>
    </Menu>
  );
};
