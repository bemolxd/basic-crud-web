import React from "react";
import {
  Avatar,
  HStack,
  VStack,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dayjs } from "utils";

interface IProps {
  userId: number;
  username: string;
  createdAt: string;
}

export const PostInfo = ({ userId, username, createdAt }: IProps) => (
  <HStack>
    <Avatar size="md" mr={2} />
    <VStack align="flex-start">
      <Heading fontSize="md" fontWeight="500" as={Link} to={`/user/${userId}`}>
        {username}
      </Heading>
      <Tooltip label={dayjs(createdAt).format("dddd, D MMM, YYYY HH:mm")}>
        <Text color="gray.500">{dayjs(createdAt).fromNow()}</Text>
      </Tooltip>
    </VStack>
  </HStack>
);
