import React, { Suspense } from "react";
import { HStack, Spacer } from "@chakra-ui/react";

import { NavigationTabs, SettingsRoutes } from "modules/settings/presentation";

export const Settings = () => {
  return (
    <Suspense fallback={<div>loading settings...</div>}>
      <HStack maxW="800px" w="100%" align="flex-start">
        <NavigationTabs />
        <Spacer />
        <SettingsRoutes />
      </HStack>
    </Suspense>
  );
};
