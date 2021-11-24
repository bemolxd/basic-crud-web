import React, { memo } from "react";
import { Box, Text, Fade } from "@chakra-ui/react";

import { useUsersQuery, useUserQuery } from "modules/users/infrastructure";
import { useMeQuery } from "modules/login/infrastructure";
import { useSearchUsersConsumer } from "modules/users/application";

import { UserCard } from "./UserCard";
import { SearchUsers } from "./SearchUsers";
import { useFriendRequestsQuery } from "modules/friends/infrastructure";

export const ExploreUsers = memo(() => {
  const { data: users } = useUsersQuery();
  const { data: me } = useMeQuery();
  const { data: myUser } = useUserQuery(me?.id!);
  const query = useSearchUsersConsumer((state) => state.query);
  const requests = useFriendRequestsQuery();

  const filteredUsers = users?.filter(
    (user) =>
      user.id !== me?.id &&
      (query !== "" ? user.username.includes(query) : user)
  );

  console.log(myUser?.friendsIds);

  return (
    <Box maxW="600px" w="100%">
      <SearchUsers />
      <Box w="100%" mt={16}>
        {filteredUsers?.length !== 0 ? (
          filteredUsers?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isRequestActive={
                !!requests?.find(
                  (request) =>
                    request.recipientId === user.id &&
                    request.senderId === me?.id &&
                    request.isActive === true
                ) || !!myUser?.friendsIds?.includes(user.id.toString())
              }
            />
          ))
        ) : (
          <Fade in>
            <Text>Nie mogę znaleźć użytkowników</Text>
          </Fade>
        )}
      </Box>
    </Box>
  );
});
