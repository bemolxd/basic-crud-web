import React from "react";
import { VStack } from "@chakra-ui/react";
import { IChildrenProp } from "types";

import { Navbar } from "./Navbar";

export const LayoutWrapper = ({ children }: IChildrenProp) => {
  return (
    <>
      <Navbar />
      <VStack mx={40} mt="58px">
        {children}
      </VStack>
    </>
  );
};
