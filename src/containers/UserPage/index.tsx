import { Suspense } from "react";

import { Box } from "@chakra-ui/react";

import { SingleUser, SingleUserSuspense } from "modules/users/presentation";

export const UserPage = () => {
  return (
    <Box maxW="600px" w="100%">
      <Suspense fallback={<SingleUserSuspense />}>
        <SingleUser />
      </Suspense>
    </Box>
  );
};
