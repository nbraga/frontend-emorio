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

const Article004: NextPage = () => {
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
              Como a música auxilia na educação
            </Heading>
            <Image src="/images/blog/menino-violao.jpg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Como a música auxilia na educação
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Música
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              O alfabetismo é visto a partir da valorização da cultura escrita,
              ou seja, elementos da leitura e da escrita que fazem parte da vida
              do aluno e da prática social. Nessa abordagem, a música é um dos
              gêneros textuais que podem contribuir para o processo de
              alfabetização e letramento, quando estudada dentro de uma sala de
              aula, desperta uma curiosidade e um interesse pelo conteúdo
              administrado em qualquer aula, além da estimulação do
              desenvolvimento afetivo, estético, cognitivo, sensorial e musical
              específico.
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              A música é uma colaboração para a prática da linguagem, seja ela
              verbal ou não verbal e para as diversas outras áreas do
              conhecimento dentro da educação básica é de extrema importância. O
              ato de cantar, dançar, ler uma letra de música, é a combinação que
              faz a junção entre a prática de ler e escrever com a presença do
              contexto cultural.
            </Text>
            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  Música é um dos gêneros textuais que podem contribuir para o
                  processo de alfabetização e letramento, quando estudada dentro
                  de uma sala de aula.
                </Text>
              </Box>
            </Flex>
            <Text fontSize={"1rem"} color="gray.200">
              É uma forma totalmente voltada para a criança que está recém
              dialogando com o grafema e o fonema. Deste modo, se utilizada em
              toda a educação básica, pode auxiliar o aprendizado dos conteúdos
              propostos, numa perspectiva dinamizadora, interativa,
              participativa e animada.
            </Text>

            <AuthorArticle
              name="Poliana Yukie"
              office="Desenvolvedora Full Stack"
              image="/images/team/poliana.jpeg"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article004;
