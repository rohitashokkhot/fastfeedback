import React from "react";
import { Box, Text } from "@chakra-ui/core";

export const Th = (props) => {
  <Text
    as="th"
    textTransform="uppercase"
    fontSize="xs"
    color="gray.500"
    fontWeight="medium"
    px={4}
    {...props}
  />;
};

export const Td = (props) => {
  <Box
    as="td"
    borderBottom="1px solid"
    borderBottomColor="gray.100"
    color="gray.900"
    fontWeight="medium"
    p={4}
    {...props}
  />;
};

export const Tr = (props) => {
  <Box
    as="tr"
    backgroundColor="gray.50"
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />;
};

export const Table = (props) => {
  return (
    <Box
      as="table"
      textAlign="left"
      backgroundColor="white"
      borderRadius={8}
      ml={0}
      mr={0}
      boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
      {...props}
    />
  );
};
