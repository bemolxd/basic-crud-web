import { ImUsers, ImSpinner4, ImRocket } from "react-icons/im";
import { useHistory } from "react-router";

import { HStack, IconButton } from "@chakra-ui/react";

import { useNotImplementedNotification } from "components/NotImplementedYet";

import { useMeQuery } from "modules/login/infrastructure";

export const MainNavigation = () => {
  const { data } = useMeQuery();
  const {
    push,
    location: { pathname },
  } = useHistory();
  const showNotification = useNotImplementedNotification();

  if (!data) return null;

  return (
    <HStack>
      <IconButton
        aria-label="feed"
        colorScheme={pathname.includes("/feed") ? "blue" : "gray"}
        onClick={() => push("/feed")}
        icon={<ImRocket />}
        variant="ghost"
        size="md"
      />
      <IconButton
        aria-label="users"
        colorScheme={pathname.includes("/users") ? "blue" : "gray"}
        onClick={() => push("/users")}
        icon={<ImUsers />}
        variant="ghost"
        size="md"
      />
      <IconButton
        aria-label="groups"
        colorScheme={pathname.includes("/groups") ? "blue" : "gray"}
        onClick={showNotification}
        icon={<ImSpinner4 />}
        variant="ghost"
        size="md"
      />
    </HStack>
  );
};
