import React, { Suspense } from "react";
import { Box } from "@chakra-ui/react";

import { SingleUser } from "modules/users/presentation";

export const UserPage = () => {
  return (
    <Box maxW="600px" w="100%">
      <Suspense fallback={<div>loading user...</div>}>
        <SingleUser />
      </Suspense>
    </Box>
  );
};
