import React from "react";
import {
  Heading,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useMeQuery } from "modules/login/infrastructure";
import { useUserQuery } from "modules/users/infrastructure";

import { UserMenu } from "./UserMenu";
import { MainNavigation } from "./MainNavigation";
import { FriendRequests } from "./FriendRequests";

export const Navbar = () => {
  const { data: me } = useMeQuery();
  const { data: user } = useUserQuery(me?.id!);

  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="54px"
      px={40}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
      justify="space-evenly"
    >
      <Heading size="lg" fontWeight="400" as={me ? Link : undefined} to="/">
        CRUD
      </Heading>
      <Spacer />
      <MainNavigation />
      <Spacer />
      {me && (
        <HStack spacing={2}>
          <Text as={Link} to={`/user/${me?.id}`}>
            {user?.username}
          </Text>
          <FriendRequests />
          <UserMenu />
        </HStack>
      )}
    </HStack>
  );
};
