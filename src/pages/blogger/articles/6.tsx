import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { AuthorArticle } from "../../../components/AuthorArticle";
import { AuthLayout } from "../../../layouts/auth";

const Article006: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      <Head>
        <title>Emoriô Digital - Artigos</title>
      </Head>
      <AuthLayout>
        <Container maxWidth={"container.lg"} py={150}>
          <Stack spacing={5}>
            <Heading
              fontSize={isMobile ? "2rem" : "5rem"}
              textAlign={"center"}
              color="orange.100"
            >
              07 dicas valiosas da Introdução de Web Sites que funcionam
            </Heading>
            <Image src="/images/blog/business.jpg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                07 dicas valiosas da Introdução de Web Sites que funcionam:
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Tecnologia
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              Basta percorrer o infindável atoleiro da World Wide Web – arranha
              céus vazios, parques de diversões abandonados, obscuros recantos
              quebrados ocasionalmente por locais limpos e bem iluminados – para
              se ver que há alguma coisa que separar os sites da Web que
              funcionam da atmosfera morta. De onde vem um bom design da Web?
              Black acredita que os princípios que nortearam a qualidade do
              design impresso por centenas de anos são igualmente válidos online
              em alguns casos são ainda mais. Eis, então, aqui 7 dicas valiosas
              da Introdução de Web Sites que funcionam:
            </Text>
            <Text>
              <li>
                Incentivar o visitante a encontrar o que está por trás da
                primeira camada.
              </li>
              <li>Precisamos entreter e informar.</li>
              <li>
                Permitir que pulem de um item para o próximo com a máxima
                facilidade.
              </li>
              <li>Bom design significa ter informações pertinentes.</li>
              <li>Bom design significa conteúdo.</li>
              <li>Não diga ao usuário o que fazer.</li>
              <li>
                É melhor não se desviar muito das tradições que funcionam.
              </li>
            </Text>
            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  Roger Black, em Websites que Funcionam. Livro usado na
                  pesquisa para a agência Emoriô Digital.
                </Text>
              </Box>
            </Flex>
            <Image src="/images/articles/livro.jpeg" alt="bgImage" />

            <AuthorArticle
              name="Felipe Morales"
              office="Gestor de Projetos"
              image="/images/team/felipe.jpeg"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article006;
