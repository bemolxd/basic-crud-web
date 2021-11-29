import { Box, VStack } from "@chakra-ui/react";

import { NavbarComponent } from "components/Layout";

import { RegisterForm } from "modules/register/presentation";

export const Register = () => {
  return (
    <>
      <NavbarComponent />
      <VStack mx={{ base: 40, xs: 2 }} mt="58px">
        <Box p={8} maxW="600px" w="100%">
          <RegisterForm />
        </Box>
      </VStack>
    </>
  );
};
