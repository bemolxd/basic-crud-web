import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Heading, HStack, Spacer, useColorModeValue } from "@chakra-ui/react";

import { MainNavigation } from "../MainNavigation";

interface IProps {
  isAuth?: boolean;
  userMenu?: ReactNode;
}

export const NavbarComponent = ({
  isAuth = false,
  userMenu = null,
}: IProps) => {
  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="54px"
      px={40}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
      justify="space-evenly"
    >
      <Heading size="lg" fontWeight="400" as={isAuth ? Link : undefined} to="/">
        CRUD
      </Heading>
      {isAuth && (
        <>
          <Spacer />
          <MainNavigation />
          <Spacer />
        </>
      )}
      {userMenu}
    </HStack>
  );
};
