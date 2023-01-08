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

const Article003: NextPage = () => {
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
              Emoriô: conheça a música que inspirou nossa agência.
            </Heading>
            <Image src="/images/blog/gil-bayana.jpg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Emoriô: conheça a música que inspirou nossa agência.
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Recode
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              Em um dos episódios do referencial programa MPB Especial (Ensaio)
              no ano de 1975, João Donato afirma que foi o cantor e compositor
              Agostinho dos Santos quem o incentivara, poucos anos antes, a
              cantar suas próprias músicas, daí o lançamento em 1973 do
              antológico álbum Quem é quem produzido por Marcos Valle e, de
              certa forma, aquele que marcaria a volta de Donato de uma
              temporada de uma década nos Estados Unidos, agora também como
              cantor. No mesmo ano de 1975, é lançado o álbum Lugar Comum que dá
              continuidade à sua veia de cantor, sem deixar de lado a riqueza de
              seus arranjos e a companhia do piano, onipresente. Neste disco a
              sua parceria com Gilberto Gil, principalmente letrando suas
              músicas, é selada definitivamente com o lançamento de músicas que
              viraram grandes sucessos que marcam a sua carreira e a música
              brasileira até hoje. Dentre as várias obras primas contidas neste
              disco, o destaque aqui é dado para a música Emoriô (Gilberto
              Gil/João Donato) que ganhou literalmente o mundo a partir de
              diferentes intérpretes além do próprio Donato. Mas afinal, o que é
              Emoriô? É interessante pensar que a letra de Emoriô, de certo
              modo, questiona o seu próprio significado: é uma palavra nagô? uma
              palavra de amor? um paladar?
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              Emoriô, na realidade, não seria nem mesmo uma palavra, mas uma
              frase em iorubá EmoriÔ, o que significa mesmo Eu Te Vejo, em
              referência a Oxalá, uma reverência a este Orixá que guarda plena
              relação com o sol, a lua e o céu e está associado à criação do
              mundo e da própria espécie humana. Na criatividade de Donato e
              Gil, Emoriô tornou-se então um Ijexá e fez um enorme sucesso na
              década de 70 como uma das músicas mais ouvidas na Europa com o
              estouro em 1975 a partir do compacto duplo de Fafá de Belém,
              lançado em Portugal, tendo em um dos lados Emoriô e do outro
              Naturalmente (também do álbum Lugar Comum) do próprio João Donato
              em parceria com Caetano Veloso. O sucesso de Fafá com as duas
              músicas de Donato foi impressionante e marcou sua carreira como
              sendo o compacto que a lançou dentro e fora do Brasil, ainda antes
              dos primeiros long plays de lançamento de sua carreira (Tamba-tajá
              - 1976, Água - 1977, Banho de Cheiro – 1978). A gravação original,
              de Donato no álbum Lugar Comum (1975) tem o próprio Donato nos
              Teclados, o baixista Novelli um dos integrantes do Clube da
              Esquina, Fredera na guitarra, um dos integrantes da icônica banda
              Som Imaginário, bateria Wilson das Neves, Gilberto Gil e uma das
              mais importantes violonistas na música popular brasileira,
              principalmente no período da Bossa Nova, Rosinha de Valença em
              algumas das faixas. Desde então, Emoriô foi executada e gravada
              por dezenas de outros intérpretes e que são imprescindíveis de
              serem conferidos, tais como o próprio Gilberto Gil, Sandra de Sá,
              Sandra Portella, Duofel e Sérgio Mendes, nesta música que
              representa dentre tantas e tantas outras de João Donato, até hoje,
              uma de suas marcas: a congregação de simplicidade com grande
              sofisticação, características impressionantes de sua obra.
            </Text>

            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  Emoriô, na realidade, não seria nem mesmo uma palavra, mas uma
                  frase em iorubá Emoriô, o que significa mesmo Eu Te Vejo.
                </Text>
              </Box>
            </Flex>

            <iframe
              width="full"
              height="500"
              src="https://www.youtube.com/embed/tsYS9IWrAKI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <AuthorArticle
              name="Luana Belmiro"
              office="Desenvolvedora Full Stack / UI UX"
              image="/images/team/luana.jpeg"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article003;
