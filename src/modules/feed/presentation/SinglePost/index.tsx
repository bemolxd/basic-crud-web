import React from "react";
import { Box, HStack, Spacer, VStack, Text } from "@chakra-ui/react";

import { Card } from "components/Card";

import { Post } from "modules/feed/application";
import { useUserQuery } from "modules/users/infrastructure";
import { useMeQuery } from "modules/login/infrastructure";

import { ActionButtons } from "./ActionButtons";
import { PostInfo } from "./PostInfo";

interface IProps {
  post: Post;
}

export const SinglePost = ({ post }: IProps) => {
  const { data: user } = useUserQuery(post.authorId);
  const { data: me } = useMeQuery();

  const isAllowed = post.authorId === me?.id;

  return (
    <Card>
      <VStack align="flex-start" spacing={4}>
        <HStack w="100%">
          <PostInfo
            userId={user?.id!}
            username={user?.username!}
            createdAt={post.created_at}
          />
          <Spacer />
          {isAllowed && <ActionButtons post={post} />}
        </HStack>
        <Box w="100%">
          <Text as="i">{post.title}</Text>
          <Text whiteSpace="pre-line">{post.body}</Text>
        </Box>
      </VStack>
    </Card>
  );
};
