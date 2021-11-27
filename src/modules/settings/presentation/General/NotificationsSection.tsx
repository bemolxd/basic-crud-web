import {
  VStack,
  HStack,
  Spacer,
  Switch,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

export const NotificationsSection = () => {
  return (
    <>
      <VStack w="100%" align="flex-start">
        <Heading fontSize="lg">Powiadomienia</Heading>
        <Text color="gray.500">Dostosuj wysyłanie powiadomień</Text>
      </VStack>
      <Divider />
      <VStack spacing={2} align="stretch" w="100%">
        <HStack>
          <Text>Powiadomienia wysyłane na adres email</Text>
          <Spacer />
          <Switch value={0} isDisabled />
        </HStack>
        <HStack>
          <Text>Powiadomienia Push w przeglądarce</Text>
          <Spacer />
          <Switch value={0} isDisabled />
        </HStack>
        <HStack>
          <Text>Powiadomienia w aplikacji</Text>
          <Spacer />
          <Switch value={0} isDisabled />
        </HStack>
      </VStack>
    </>
  );
};
