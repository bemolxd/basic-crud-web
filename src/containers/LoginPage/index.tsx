import React from "react";
import { Box } from "@chakra-ui/react";

import { LoginForm } from "modules/login/presentation";

export const LoginPage = () => {
  return (
    <Box p={8} maxW="600px">
      <LoginForm />
    </Box>
  );
};
