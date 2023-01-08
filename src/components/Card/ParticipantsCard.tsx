import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ParticipantsProps } from "../../interfaces/participantsProps";

export const ParticipantsCard = ({
  name,
  office,
  description,
  image,
}: ParticipantsProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w={"full"}
      maxW={"container.lg"}
      gap="20px"
    >
      <Stack
        backgroundImage="/images/quote.png"
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        boxShadow="base"
        p={10}
      >
        <Text fontSize={"sm"} color={"gray.200"} maxW={500}>
          {description}
        </Text>
        <Text as="b" fontSize={"lg"} color={"blue.100"}>
          {name}
        </Text>
        <Text as="b" fontSize={"sm"} color={"blue.100"}>
          {office}
        </Text>
      </Stack>
      <Box boxSize={300}>
        <Image src={image} alt={name} />
      </Box>
    </Flex>
  );
};
