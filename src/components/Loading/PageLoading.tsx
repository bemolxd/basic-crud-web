import { Box, Spinner, Heading, VStack } from "@chakra-ui/react";

export const PageLoading = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      h="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Heading size="lg" fontWeight="400">
          CRUD
        </Heading>
        <Spinner />
      </VStack>
    </Box>
  );
};
