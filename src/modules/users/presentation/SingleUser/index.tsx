import { useParams } from "react-router";

import { Box } from "@chakra-ui/react";

import { EditPostModal } from "modules/feed/presentation";
import { useUserQuery } from "modules/users/infrastructure";

import { UserRoutes } from "./Content";
import { InfoSection } from "./InfoSection";

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
