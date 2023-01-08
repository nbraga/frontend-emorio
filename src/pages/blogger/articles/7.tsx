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

const Article007: NextPage = () => {
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
              Como a EmoriÔ Digital Auxilia na Erradicação do Analfabetismo nas
              Zonas Rurais
            </Heading>
            <Image src="/images/blog/avo-crianca.jpg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Como a EmoriÔ Digital Auxilia na Erradicação do Analfabetismo
                nas Zonas Rurais
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Zonas Rurais
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              Analfabetismo vai além de não saber ler e escrever. A falta de
              acesso à cultura, não compreender a realidade que o cerca, falta
              de interpretação de textos e contextos, é um problema grave
              ocasionado pela deficiência da educação brasileira. “São chamados
              de analfabetos funcionais os indivíduos que, embora saibam
              reconhecer incapazes de compreender textos simples, bem como
              realizar operações matemáticas mais elaboradas.”
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              A melhor cura para auxiliar a educação nesse combate aos
              analfabetismos que existem é a Cultura. Estudos comprovam que
              envolvimento de jovens, crianças e adultos com atividades
              artísticas melhora seu intelecto, capacidade de raciocínio,
              habilidades interpessoais. No caso de crianças e jovens ainda
              auxilia em uma melhora na disciplina e no desempenho acadêmico.
              Por isso enxergamos que apoiar projetos socioculturais que atuem
              no campo, zonas rurais e florestas é a melhor forma de melhorar a
              educação, a sociedade e o mundo.
            </Text>
            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  Nossa agência tem a missão de dar visibilidade para esses
                  projetos, criar sua identidade virtual e abrir as portas do
                  mundo da internet. Criamos um site personalizado para nossos
                  projetos apoiados, de acordo com as suas necessidades, de
                  forma a melhorar sua atuação local e global.
                </Text>
              </Box>
            </Flex>
            <Text fontSize={"1rem"} color="gray.200">
              Ao abrir as portas da World Wide Web para esses projetos, abrimos
              um mundo de possibilidades, novas parceirias surgem, novas
              caminhos se abrem. O projeto se solidifica, ganha visibilidade e
              força.
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              A EmoriÔ Digital coloca toda sua potência lado a lado das nossas
              organizações parceiras, projetos apoiados, para avançarmos juntos
              rumo à construção de uma realidade onde todos saibam ler,
              escrever, resolver problemas matemáticos, apreciar uma boa música,
              peças de teatro, cinema. Um mundo plural e diverso, sem ignorância
              e sem obscurantismo.
            </Text>

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

export default Article007;
