import React from "react";
import { TabList, Tab, Tabs } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { Card } from "components/Card";

import { getActiveTabIndex } from "modules/settings/application";

export const NavigationTabs = () => {
  const {
    push,
    location: { pathname },
  } = useHistory();
  const baseURL = "/settings";

  return (
    <Card maxW="200px" w="100%">
      <Tabs orientation="vertical" index={getActiveTabIndex(pathname)}>
        <TabList alignItems="flex-start">
          <Tab onClick={() => push(baseURL)}>Ogólne</Tab>
          <Tab onClick={() => push(`${baseURL}/change-password`)}>
            Zmiana hasła
          </Tab>
          <Tab onClick={() => push(`${baseURL}/cookies`)}>Pliki cookies</Tab>
          <Tab onClick={() => push(`${baseURL}/privacy`)}>Prywatność</Tab>
        </TabList>
      </Tabs>
    </Card>
  );
};
