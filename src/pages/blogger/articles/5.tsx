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

const Article005: NextPage = () => {
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
              Educação: Contraste entre meio urbano e rural
            </Heading>
            <Image src="/images/blog/criancas-rurais.jpg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Educação: Contraste entre meio urbano e rural
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Educação
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              O acesso às instituições de ensino e a alfabetização não são
              uniformes no território brasileiro. Existem diferenças
              significativas entre regiões, estados e municípios. A diferença
              mais marcante é observada entre os indicadores educacionais dos
              meios rural e urbano. O rural brasileiro apresenta, segundo dados
              do censo demográfico de 2010 (IBGE, 2011), indicadores defasados
              em relação ao urbano.
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              Segundo pesquisas os dados de analfabetismo para os estados
              brasileiros mostram a grande diferença entre os meios rural e o
              urbano. A taxa de analfabetismo no Brasil em 2010 foi de 10,2%,
              porém com 7,54% de analfabetos no meio urbano e 24,64% no meio
              rural. Essa diferença é ainda maior quando se desagrega a
              informação por estados. Os estados do Nordeste apresentaram as
              maiores taxas com relação a essa variável, com destaque negativo
              para Alagoas (26%), Piauí (24,5%) e Paraíba (23,4%). Ao desagregar
              para as áreas urbana e rural, todos os estados apresentaram taxa
              superior a 30%, porém os piores resultados foram também em Alagoas
              (41,7%), Piauí (38,7%) e Paraíba (37,5%), para o rural. Na região
              Norte, apenas Rondônia e Amapá apresentaram taxa de analfabetismo
              menor que a média nacional para esta taxa no agregado, ao passo
              que os demais estados do Norte apresentaram taxas superiores, com
              destaque para o Acre (17,8%). Todos os estados do Centro-Oeste,
              Sudeste e Sul apresentaram taxa de analfabetismo inferior à média
              nacional.
            </Text>
            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  É nítida a diferença entre as regiões do Brasil, os principais
                  fatores para a baixa produtividade do ensino na área rural é
                  expressa nos altos níveis de evasão e repetência, na
                  precariedade das instalações escolares, a falta de
                  acessibilidade, material e equipamentos, baixo salário das
                  professoras, crianças desmotivadas e desnutridas (reflexo da
                  baixa renda familiar em tantas regiões rurais brasileiras),
                  crianças que precisam trabalhar para auxiliar a família e
                  professoras que ministram as aulas em suas próprias
                  residências.
                </Text>
              </Box>
            </Flex>
            <Text fontSize={"1rem"} color="gray.200">
              A educação de qualidade da população de um país é amplamente
              apontada como fator de grande relevância com relação ao processo
              de desenvolvimento social, científico, cultural e econômico de um
              povo, de uma nação. Oferecer condições mínimas de desenvolvimento,
              considerando a liberdade e o direito de obterem para si mesmas um
              padrão de vida melhor, inicia-se pelo oferecimento de uma educação
              básica de qualidade desde os primeiros anos da infância e ao longo
              da vida, o que demanda políticas públicas especificas e eficientes
              e que considerem as especificidades de cada região do Brasil.
            </Text>

            <AuthorArticle
              name="Gabriela Godoi"
              office="Desenvolvedora Full Stack"
              image="/images/team/gabriela.jpeg"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article005;
