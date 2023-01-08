import {
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Highlight,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Flex flexDir={"column"} bg={"gray.100"} alignItems={"center"}>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"container.xl"}
        py={10}
      >
        <SimpleGrid w={"full"} columns={isMobile ? 1 : 2} spacing={20}>
          <Stack
            w={isMobile ? "full" : "md"}
            spacing={5}
            justifyContent="center"
          >
            <Image src="/images/logo-principal.png" alt="Logo" />
            <Text textAlign={"justify"} color={"gray.200"}>
              Vamos dar visibilidade e ecoar projetos socioculturais que atuem
              no campo, em zonas rurais, áreas afastadas do centro urbano e
              tecnológico. Criar pontes para facilitar o acesso à educação, à
              dignidade humana, o empoderamento digital.
            </Text>
            <Text color={"gray.200"}>
              Somos inovadores, diversos e plurais. Somos a EmoriÔ.
            </Text>
          </Stack>
          <Stack spacing={5} justifyContent="center" alignItems={"center"}>
            <Text as="b" color={"blue.100"} fontSize={30}>
              Contato
            </Text>
            <Flex>
              <Text as="b" color={"gray.200"}>
                Email Principal
              </Text>
              <Text color={"orange.100"}>: agencia@emoriodigital.com.br</Text>
            </Flex>
            <Flex>
              <Text as="b" color={"gray.200"}>
                Email Equipe
              </Text>
              <Text color={"orange.100"}>: squad53.recodepro@gmail.com</Text>
            </Flex>
            <Flex>
              <Text as="b" color={"gray.200"}>
                Instagram
              </Text>
              <Text color={"orange.100"}>: @EmoriÔ.Digital</Text>
            </Flex>
            <Flex>
              <Text as="b" color={"gray.200"}>
                LinkedIn
              </Text>
              <Text color={"orange.100"}>: EmoriÔ Digital</Text>
            </Flex>
            <Flex>
              <Text as="b" color={"gray.200"}>
                Youtube
              </Text>
              <Text color={"orange.100"}>: EmoriÔ Digital</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider />
      <Container
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"container.xl"}
        gap={isMobile ? 5 : 20}
      >
        <Highlight
          query="SQUAD 053"
          styles={{ color: "orange.100", fontWeight: "bold" }}
        >
          Este Projeto foi Desenvolvido pelo: SQUAD 053
        </Highlight>

        <Image
          borderRadius={"40px"}
          boxSize="100px"
          objectFit="contain"
          src="/images/logo-recode.jpeg"
          alt="Logo"
        />
      </Container>
    </Flex>
  );
};
