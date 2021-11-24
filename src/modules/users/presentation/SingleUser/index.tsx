import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";

import { useUserQuery } from "modules/users/infrastructure";
import { EditPostModal } from "modules/feed/presentation";

import { InfoSection } from "./InfoSection";
import { UserRoutes } from "./Content";

export const SingleUser = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: user } = useUserQuery(Number(userId));

  if (!user) return <div>no user found</div>;

  return (
    <Box>
      <EditPostModal />
      <InfoSection user={user} />
      {/* <Posts posts={posts!} /> */}
      <UserRoutes />
    </Box>
  );
};
