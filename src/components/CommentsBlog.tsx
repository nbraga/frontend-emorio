import {
  Stack,
  Text,
  Image,
  Box,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { TextButton } from "./Button/TextButton";

export const CommentsBlog = () => {
  const [isMobile] = useMediaQuery("(max-width: 750px)");
  return (
    <Stack>
      <Text as={"b"} color={"blue.100"} fontSize={"1.5rem"}>
        05 Comentários
      </Text>
      <Box
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        alignItems={"center"}
        p={5}
        bgColor={"white.200"}
        border={"solid 1px"}
        borderColor={"gray.100"}
        w={"full"}
      >
        <Image
          borderRadius={"full"}
          boxSize={"100px"}
          fallbackSrc="https://via.placeholder.com/150"
          alt="img-user"
        />
        <Stack p={2} w={"full"}>
          <Text noOfLines={3}>Conteudo</Text>
          <Stack
            w={"full"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <HStack>
              <Text as={"b"} fontSize={"1rem"}>
                Nome
              </Text>
              <Text as={"i"} fontSize={"0.8rem"}>
                Data e hora
              </Text>
            </HStack>
            <TextButton w={"fit-content"}>RESPONDER</TextButton>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
