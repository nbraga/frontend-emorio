import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { PrimaryButton } from "./Button/PrimaryButton";
import { InputArea } from "./Form/InputArea";
import { InputSingle } from "./Form/InputSingle";

export const CreateComments = () => {
  const [isMobile] = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      as={Stack}
      p={5}
      bgColor={"white.200"}
      border={"solid 1px"}
      borderColor={"gray.100"}
      w={"full"}
    >
      <Text as={"b"} color={"blue.100"} fontSize={"1rem"}>
        Deixe seu comentário
      </Text>

      <Stack spacing={5}>
        <InputSingle label="Título" nameInput="subject" />
        <InputArea label="Descrição" nameInput="description" />

        <PrimaryButton w={isMobile ? "full" : "sm"}>
          Enviar Comentário
        </PrimaryButton>
      </Stack>
    </Box>
  );
};
