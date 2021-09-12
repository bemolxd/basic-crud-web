import React from "react";
import { Box } from "@chakra-ui/react";

import { useUsersQuery } from "modules/users/infrastructure";
import { useMeQuery } from "modules/login/infrastructure";
import { UserCard } from "./UserCard";

export const ExploreUsers = () => {
  const { data: users } = useUsersQuery();
  const { data: me } = useMeQuery();

  if (!users) return <div>no users</div>;

  return (
    <Box maxW="600px" w="100%">
      {users
        .filter((user) => user.id !== me?.id)
        .map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
    </Box>
  );
};
