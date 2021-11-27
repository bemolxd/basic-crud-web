import { useHistory } from "react-router";

import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Spacer,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { useLogout, useMeQuery } from "modules/login/infrastructure";

export const UserMenu = () => {
  const { push } = useHistory();
  const { data: me } = useMeQuery();
  const { toggleColorMode } = useColorMode();
  const [logout] = useLogout();

  const colorModeText = useColorModeValue("Light Mode", "Dark Mode");

  return (
    <Menu>
      <MenuButton as={Avatar} size="sm" _hover={{ cursor: "pointer" }} />
      <MenuList>
        <MenuItem onClick={() => push(`/user/${me?.id}`)}>Profil</MenuItem>
        <MenuItem onClick={async () => await logout()}>Wyloguj</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => push("/settings")}>Ustawienia</MenuItem>
        <MenuItem closeOnSelect={false} onClick={toggleColorMode}>
          <>
            {colorModeText}
            <Spacer />
            <Switch
              onClick={toggleColorMode}
              isChecked={useColorModeValue(false, true)}
            />
          </>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
