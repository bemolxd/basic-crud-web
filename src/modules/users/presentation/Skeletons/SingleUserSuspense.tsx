import React from "react";
import { VStack, SkeletonCircle, Skeleton } from "@chakra-ui/react";

import { Card } from "components/Card";

export const SingleUserSuspense = () => (
  <Card>
    <VStack spacing={4}>
      <SkeletonCircle size="32" />
      <Skeleton h="32px" maxW="120px" w="100%" />
      <Skeleton h="22px" maxW="180px" w="100%" />
      <Skeleton h="22px" maxW="200px" w="100%" />
    </VStack>
  </Card>
);
