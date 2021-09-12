import React from "react";
import {
  Heading,
  HStack,
  Spacer,
  Avatar,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useMeQuery } from "modules/login/infrastructure";

export const Navbar = () => {
  const { data: me } = useMeQuery();

  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="54px"
      px={40}
      spacing={4}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
    >
      <Heading size="lg" fontWeight="400" as={me ? Link : undefined} to="/">
        CRUD
      </Heading>
      <Spacer />
      {me && (
        <>
          <Text as={Link} to={`/user/${me?.id}`}>
            {me?.username}
          </Text>
          <Avatar size="sm" />
        </>
      )}
    </HStack>
  );
};
