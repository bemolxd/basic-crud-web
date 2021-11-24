import React from "react";
import { Skeleton, SkeletonCircle, HStack, Box } from "@chakra-ui/react";

import { Card } from "components/Card";

const ExploreUsersSkeleton = () => (
  <Card>
    <HStack spacing={4}>
      <SkeletonCircle size="8" />
      <Box maxW="400px" w="100%">
        <Skeleton height="18px" />
      </Box>
    </HStack>
  </Card>
);

export const ExploreUsersSuspense = () => (
  <Box maxW="600px" w="100%">
    <ExploreUsersSkeleton />
    <ExploreUsersSkeleton />
    <ExploreUsersSkeleton />
    <ExploreUsersSkeleton />
  </Box>
);
