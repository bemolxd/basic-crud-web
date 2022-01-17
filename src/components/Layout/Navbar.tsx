import { Link } from "react-router-dom";

import {
  Heading,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { withErrorBoundary } from "components/ErrorBoundary";

import { useMeQuery } from "modules/login/infrastructure";
import { useUserQuery } from "modules/users/infrastructure";

import { FriendRequests } from "./FriendRequests";
import { MainNavigation } from "./MainNavigation";
import { NavbarComponent } from "./NavbarComponent";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  const { data: me } = useMeQuery();
  const { data: user } = useUserQuery(me?.id!);

  return (
    <NavbarComponent
      isAuth={!!me}
      userMenu={
        <>
          {me && (
            <HStack spacing={2}>
              <Text as={Link} to={`/user/${me?.id}`}>
                {user?.username}
              </Text>
              <FriendRequests />
              <UserMenu />
            </HStack>
          )}
        </>
      }
    />
  );
};

const NavbarWithBoundary = withErrorBoundary(Navbar);

export { NavbarWithBoundary as Navbar };
