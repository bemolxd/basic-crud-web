import { createRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

import {
  Box,
  HStack,
  Text,
  SlideFade,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { useSearchUsersConsumer } from "modules/users/application";

export const SearchUsers = () => {
  const [search, setSearch] = useState(false);
  const searchInputRef = createRef<HTMLInputElement>();
  const setQuery = useSearchUsersConsumer((state) => state.setQuery);

  return (
    <Box
      maxW="600px"
      w="100%"
      bg={useColorModeValue("white", "gray.800")}
      p={2}
      position="fixed"
      zIndex="8"
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.700", "gray.300")}
    >
      <HStack justify="space-between">
        <Text>Eksploruj użytkowników</Text>
        {search ? (
          <Box maxW="300px" w="100%">
            <SlideFade in={search}>
              <InputGroup w="100%" alignContent="center">
                <Input
                  size="sm"
                  variant="filled"
                  borderRadius={8}
                  onBlur={() => setSearch(false)}
                  onChange={(e) => setQuery(e.target.value)}
                  ref={searchInputRef}
                  placeholder="Szukaj"
                />
                <InputRightElement
                  children={<BiSearch />}
                  pointerEvents="none"
                />
              </InputGroup>
            </SlideFade>
          </Box>
        ) : (
          <IconButton
            aria-label="search-users"
            variant="ghost"
            icon={<BiSearch />}
            size="sm"
            onClick={() => {
              setSearch(true);
              // searchInputRef.current?.click();
            }}
          />
        )}
      </HStack>
    </Box>
  );
};
