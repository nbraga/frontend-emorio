import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  image: string;
  office: string;
}

export const AuthorArticle = ({ name, image, office }: Props) => {
  return (
    <Flex bg={"white.200"} p={5} gap={"20px"}>
      <Image borderRadius="full" boxSize="150px" src={image} alt={name} />
      <Stack justifyContent={"center"}>
        <Heading color={"blue.100"}>{name}</Heading>
        <Text as="i" color={"gray.200"}>
          {office}
        </Text>
      </Stack>
    </Flex>
  );
};
