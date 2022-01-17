import { VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Navbar } from "./Navbar";
import { NavbarComponent } from "./NavbarComponent";

const LayoutWrapper = ({ children }: IChildrenProp) => {
  return (
    <>
      <Navbar />
      <VStack mx={{ base: 40, xs: 2 }} mt="58px">
        {children}
      </VStack>
    </>
  );
};

export { LayoutWrapper, NavbarComponent };
