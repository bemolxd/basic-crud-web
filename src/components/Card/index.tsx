import React from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { IChildrenProp } from "types";

export const Card = ({ children, ...props }: IChildrenProp & BoxProps) => {
  const bg = useColorModeValue("white", "gray.700");
  return (
    <Box bgColor={bg} borderRadius={4} boxShadow="md" m={4} p={4} {...props}>
      {children}
    </Box>
  );
};
