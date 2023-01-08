import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";

import { GhostButton } from "../components/Button/GhostButton";
import { PrimaryButton } from "../components/Button/PrimaryButton";
import { BasicCard } from "../components/Card/BasicCard";
import { AuthLayout } from "../layouts/auth";

import { BiWorld } from "react-icons/bi";
import { BsStar, BsSuitHeart, BsSun } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { TfiRulerPencil, TfiStamp } from "react-icons/tfi";

import { TitleUppercase } from "../components/TitleUppercase";

import { Carousel } from "react-responsive-carousel";
import { ArticleCard } from "../components/Card/ArticleCard";
import { ParticipantsCard } from "../components/Card/ParticipantsCard";
import { DividerSection } from "../components/DividerSection";
import { listParticipants } from "../utils/mockParticipants";

import { useCookies } from "react-cookie";

const Home: NextPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["@emorio.token"]);

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      <Head>
        <title>Emoriô Digital - Início</title>
      </Head>

      <AuthLayout>
        <Box
          bgImage="url(/images/waves/bg-home.png)"
          bgRepeat="no-repeat"
          bgPosition="top right"
          w={"full"}
        >
          <Container maxWidth={"container.xl"} pt={100}>
            <Stack mt={5} direction={isMobile ? "column-reverse" : "row"}>
              <Stack spacing={5}>
                <Text as="b" color={"blue.100"} fontSize={"sm"}>
                  EMPODERAMENTO DIGITAL E VISIBILIDADE
                </Text>
                <Text as="b" color={"blue.100"} fontSize={"5xl"}>
                  Aliando Tecnologia À Cultura, Conectamos Projetos Do Campo Ao
                  Mundo Virtual
                </Text>
                <Text color={"blue.100"} fontSize={"md"}>
                  Vamos dar visibilidade e ecoar projetos socioculturais que
                  atuem no campo, em zonas rurais, áreas afastadas do centro
                  urbano e tecnológico. Criar pontes para facilitar o acesso à
                  educação, à dignidade humana, o empoderamento digital.
                </Text>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  w={isMobile ? "full" : "sm"}
                >
                  {cookies["@emorio.token"] ? (
                    <PrimaryButton onClick={() => Router.push("/about")}>
                      Saiba Mais
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton onClick={() => Router.push("/login")}>
                      Entrar
                    </PrimaryButton>
                  )}

                  <GhostButton onClick={() => Router.push("/blogger")}>
                    Projetos
                  </GhostButton>
                </Stack>
              </Stack>
              <Image
                boxSize={isMobile ? "sm" : "xl"}
                src="/images/banner-home.png"
                alt="Banner Home"
              />
            </Stack>
          </Container>
        </Box>
        {/* Reality */}
        <Container maxWidth={"container.xl"} py={100}>
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)"}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Stack spacing={5}>
                <Heading size="xl">Transformar em Realidade</Heading>

                <Text fontSize={"sm"} color={"gray.200"}>
                  Alfabetizar jovens e adultos não é uma tarefa simples, mas ela
                  precisa ser feita. A educação, como prevê a nossa
                  Constituição, é um direito de todos.
                </Text>
                <PrimaryButton onClick={() => Router.push("/team")}>
                  Time Emoriô
                </PrimaryButton>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Futuro Melhor"
                description="É um dever do estado e da família oferecer, em colaboração com a sociedade, uma educação que faça as pessoas se desenvolverem plenamente ao longo da vida."
                icon={BsSun}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Ações Importantes"
                description="A situação do analfabetismo não só nas zonas rurais, mas em todo Brasil, só será erradicada com a ajuda de todos para um bem maior e para um Brasil que dê importância para educação."
                icon={BsStar}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Oportunidades de Aprendizado"
                description="Milhões de pessoas ainda sofrem com o analfabetismo, a Emoriô Digital oferece oportunidades para diversas comunidades rurais"
                icon={BsSuitHeart}
              />
            </GridItem>
          </Grid>
        </Container>
        {/* About */}
        <Container
          bgImage="url(/images/waves/bg-learning.png)"
          bgRepeat="no-repeat"
          bgPosition="left"
          maxWidth={"container.xl"}
          my={100}
        >
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={6}
          >
            <GridItem>
              <Image
                boxSize={isMobile ? "sm" : "xl"}
                src="/images/learning-home.png"
                alt="Learning Home"
              />
            </GridItem>
            <GridItem>
              <Stack spacing={10}>
                <TitleUppercase title="Sobre nós" />

                <Text as="b" color={"blue.100"} fontSize={"4xl"}>
                  Aprendendo com amor e riso
                </Text>
                <Text color={"blue.100"} fontSize={"sm"}>
                  <Badge>Aprender</Badge>, palavra que nos define desde o nosso
                  nascimento, é a base de todas pessoas e de onde podemos
                  realizar nossos objetivos de vida.
                </Text>
                <Flex gap={5} alignItems={"center"}>
                  <MdEditNote />
                  <Text fontSize={"sm"}>
                    Acreditamos em um futuro melhor e que a educação salva vidas
                  </Text>
                </Flex>
                <Flex gap={5} alignItems={"center"}>
                  <TfiRulerPencil />
                  <Text fontSize={"sm"}>
                    Materiais disponibilizados por nossos parceiros
                  </Text>
                </Flex>

                <PrimaryButton onClick={() => Router.push("/about")}>
                  Consulte Mais Informações
                </PrimaryButton>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* Counter */}
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          bg={"mix.100"}
          justifyContent={"space-evenly"}
          py={100}
          my={100}
        >
          <Stack color={"white"} align={"center"} spacing={5}>
            <Text as="b" fontSize={"5xl"}>
              3
            </Text>
            <Divider w={isMobile ? 100 : 200} borderColor="white" />
            <Text as="b" fontSize={"2xl"}>
              Projetos Apoiados
            </Text>
          </Stack>
          <Stack
            mt={isMobile ? 10 : 0}
            color={"white"}
            align={"center"}
            spacing={5}
          >
            <Text as="b" fontSize={"5xl"}>
              242
            </Text>
            <Divider w={isMobile ? 100 : 200} borderColor="white" />
            <Text as="b" fontSize={"2xl"}>
              Pessoas Alcançadas
            </Text>
          </Stack>
          <Stack
            mt={isMobile ? 10 : 0}
            color={"white"}
            align={"center"}
            spacing={5}
          >
            <Text as="b" fontSize={"5xl"}>
              3
            </Text>
            <Divider w={isMobile ? 100 : 200} borderColor="white" />
            <Text as="b" fontSize={"2xl"}>
              Estados Atingidos
            </Text>
          </Stack>
          <Stack
            mt={isMobile ? 10 : 0}
            color={"white"}
            align={"center"}
            spacing={5}
          >
            <Text as="b" fontSize={"5xl"}>
              26
            </Text>
            <Divider w={isMobile ? 100 : 200} borderColor="white" />
            <Text as="b" fontSize={"2xl"}>
              Profissionais Envolvidos
            </Text>
          </Stack>
        </Flex>
        {/* Informations */}

        <Container maxWidth={"container.xl"} pt={100}>
          <Grid
            pt={50}
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Stack spacing={5}>
                <TitleUppercase title="EDUCAÇÃO E TECNOLOGIA" />
                <Text as="b" color={"blue.100"} fontSize={"4xl"}>
                  Tecnologia e Cultura Mudando os Rumos da Educação
                </Text>

                <Text color={"blue.100"} fontSize={"sm"}>
                  Uma das principais relações entre tecnologia e cultura na vida
                  das pessoas é vista no desenvolvimento das relações
                  interpessoais. Isso porque, antes das inovações tecnológicas,
                  as relações – tanto de amizade quanto amorosas – eram formadas
                  em um espaço mais restrito e com poucas alternativas de
                  comunicação.
                </Text>
                <Flex gap={5}>
                  <Stack align={"start"}>
                    <Box
                      p={4}
                      borderRadius={"full"}
                      bg={"yellow.200"}
                      color="black"
                    >
                      <BiWorld size={25} />
                    </Box>
                    <Text as="b" fontSize={"lg"}>
                      Aprenda em qualquer lugar
                    </Text>
                    <Text fontSize={"sm"}>
                      Graças ao avanço da tecnologia, a educação pode chegar em
                      diversos lugares, por mais díficil acesso que seja!
                    </Text>
                  </Stack>
                  <Stack align={"start"}>
                    <Box
                      p={4}
                      borderRadius={"full"}
                      bg={"yellow.200"}
                      color="black"
                    >
                      <TfiStamp size={25} />
                    </Box>
                    <Text as="b" fontSize={"lg"}>
                      Seja um Agente Transformador
                    </Text>
                    <Text fontSize={"sm"}>
                      Cada pessoa pode constribuir com um simples gesto de
                      empatia, uma atitude pode mudar o percurso da vida de quem
                      necessita.
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
            </GridItem>
            <GridItem
              bgImage="url(/images/waves/to-read-bg.png)"
              bgRepeat="no-repeat"
              bgPosition="left"
              colSpan={1}
            >
              <Image
                boxSize={isMobile ? "sm" : "xl"}
                src="/images/to-read.png"
                alt="Banner Home"
              />
            </GridItem>
          </Grid>
        </Container>

        <DividerSection
          title="Participantes"
          subTitle="CONHEÇA NOSSAS PARCERIAS"
        />

        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          {listParticipants.map((item) => (
            <Flex
              key={item.id}
              justifyContent={"center"}
              alignItems={"center"}
              w={"full"}
            >
              <ParticipantsCard
                id={item.id}
                name={item.name}
                office={item.office}
                description={item.description}
                image={item.image}
              />
            </Flex>
          ))}
        </Carousel>

        <DividerSection title="Artigos" subTitle="NOSSO BLOG" />

        <Container maxWidth={"container.xl"} my={100}>
          <Stack
            justifyContent={"center"}
            alignItems={isMobile ? "center" : "start"}
            direction={isMobile ? "column" : "row"}
            spacing={5}
          >
            <ArticleCard
              title="Emoriô: Conheça A Música Que Inspirou Nossa Agência."
              description="Dentre as várias obras primas contidas neste disco, o destaque aqui é dado para a música “Emoriô” (Gilberto Gil/João Donato) que ganhou literalmente o mundo a partir de diferentes intérpretes além do próprio Donato."
              tag="Música"
              image="/images/blog/gil-bayana.jpg"
              route="/blogger/articles/3"
            />
            <ArticleCard
              title="Como A EmoriÔ Digital Auxilia Na Erradicação Do Analfabetismo Nas Zonas Rurais"
              description="Enxergamos que apoiar projetos socioculturais que atuem no campo, zonas rurais e florestas é uma ótima forma de melhorar a educação, a sociedade e o mundo."
              tag="Analfabetismo"
              image="/images/blog/avo-crianca.jpg"
              route="/blogger/articles/7"
            />
            <ArticleCard
              title="Como A Música Auxilia Na Educação"
              description="O alfabetismo é visto a partir da valorização da cultura escrita, ou seja, elementos da leitura e da escrita que fazem parte da vida do aluno e da prática social."
              tag="Tecnologia"
              image="/images/blog/menino-violao.jpg"
              route="/blogger/articles/4"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Home;

/* export const getServerSideProps = withAuth(async (ctx: any) => {
  return {
    props: {},
  };
});
 */
