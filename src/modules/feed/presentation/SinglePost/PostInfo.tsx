import React from "react";
import {
  Avatar,
  HStack,
  VStack,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { dayjs } from "utils";

interface IProps {
  username: string;
  createdAt: string;
}

export const PostInfo = ({ username, createdAt }: IProps) => (
  <HStack>
    <Avatar size="md" mr={4} />
    <VStack align="flex-start">
      <Heading fontSize="md" fontWeight="500">
        {username}
      </Heading>
      <Tooltip label={dayjs(createdAt).format("dddd, D MMM, YYYY HH:mm")}>
        <Text color="gray.500">{dayjs(createdAt).fromNow()}</Text>
      </Tooltip>
    </VStack>
  </HStack>
);
