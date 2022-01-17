import { Box, VStack } from "@chakra-ui/react";

import { NavbarComponent } from "components/Layout";

import { LoginForm } from "modules/login/presentation";

export const LoginPage = () => {
  return (
    <>
      <NavbarComponent />
      <VStack mx={{ base: 40, xs: 2 }} mt="58px">
        <Box p={8} maxW="600px" w="100%">
          <LoginForm />
        </Box>
      </VStack>
    </>
  );
};
