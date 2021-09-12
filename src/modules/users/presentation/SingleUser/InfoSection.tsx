import React from "react";
import {
  Avatar,
  Heading,
  HStack,
  Spacer,
  VStack,
  Text,
} from "@chakra-ui/react";
import { dayjs } from "utils";

import { Card } from "components/Card";

import { User } from "modules/users/application";

interface IProps {
  user: User;
}

export const InfoSection = ({ user }: IProps) => {
  return (
    <Card>
      <VStack spacing={4}>
        <Avatar size="2xl" />
        <Heading size="lg" fontWeight="500">
          {user.username}
        </Heading>
        <Text color="gray.500">
          Dołączył(a): {dayjs(user.creatred_at).format("DD/MM/YYYY")}
        </Text>
        <HStack maxW="200px" width="100%">
          <Text>Posty: {user.posts!.length ?? 0}</Text>
          <Spacer />
          <Text>Znajomi: 0</Text>
        </HStack>
      </VStack>
    </Card>
  );
};
