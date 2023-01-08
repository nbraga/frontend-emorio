import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
}

export const TitleUppercase = ({ title }: Props) => {
  return (
    <Flex alignItems={"center"} gap={5}>
      <Box w={100} h={0.5} bg={"orange.100"} />
      <Text
        as="b"
        textTransform={"uppercase"}
        color={"blue.100"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </Flex>
  );
};
