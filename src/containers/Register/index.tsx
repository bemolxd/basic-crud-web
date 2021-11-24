import React from "react";
import { Box } from "@chakra-ui/react";

import { RegisterForm } from "modules/register/presentation";

export const Register = () => {
  return (
    <Box p={8} maxW="600px" w="100%">
      <RegisterForm />
    </Box>
  );
};
