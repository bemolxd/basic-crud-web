import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";

import { useUserQuery } from "modules/users/infrastructure";
import { EditPostModal, SinglePost } from "modules/feed/presentation";
import { usePostsQuery } from "modules/feed/infrastructure";

import { InfoSection } from "./InfoSection";

export const SingleUser = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: user } = useUserQuery(Number(userId));
  const { data: posts } = usePostsQuery(Number(userId));

  console.log(posts);

  if (!user) return <div>no user foud</div>;

  return (
    <Box>
      <EditPostModal />
      <InfoSection user={user} />
      {posts
        ?.sort((prev, next) => next.id - prev.id)
        .map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
    </Box>
  );
};
