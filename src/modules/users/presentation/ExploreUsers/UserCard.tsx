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

interface IProps {
  user: User;
}

export const UserCard = ({ user }: IProps) => {
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
        <Tooltip label="Dodaj do znajomych">
          <IconButton
            aria-label="add-to-friends"
            icon={<HiUserAdd />}
            variant="ghost"
            color="blue.400"
          />
        </Tooltip>
      </HStack>
    </Card>
  );
};
