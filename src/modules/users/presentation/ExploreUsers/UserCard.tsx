import React from "react";
import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";

import { Card } from "components/Card";

import { User } from "modules/users/application";
import { useSendFriendRequest } from "modules/friends/infrastructure";

interface IProps {
  user: User;
  isRequestActive: boolean;
}

export const UserCard = ({ user, isRequestActive }: IProps) => {
  const [sendRequest, isLoading] = useSendFriendRequest();

  return (
    <Card>
      <HStack spacing={4}>
        <Avatar size="sm" />
        <Heading
          fontSize="md"
          fontWeight="500"
          as={Link}
          to={`/user/${user.id}`}
        >
          {user.username}
        </Heading>
        <Spacer />
        {!isRequestActive && (
          <Tooltip label="Dodaj do znajomych">
            <IconButton
              aria-label="add-to-friends"
              icon={<HiUserAdd />}
              variant="ghost"
              colorScheme="blue"
              onClick={async () => await sendRequest(user.id)}
              isLoading={isLoading}
            />
          </Tooltip>
        )}
      </HStack>
    </Card>
  );
};
