import {
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { AuthorArticle } from "../../../components/AuthorArticle";
import { CommentsBlog } from "../../../components/CommentsBlog";
import { CreateComments } from "../../../components/CreateComments";
import { AuthLayout } from "../../../layouts/auth";

const Article001: NextPage = () => {
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
              Pitch, Bastidores e Feedbacks
            </Heading>
            <Image src="/images/blog/artigo.png" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Pitch, Bastidores e Feedbacks
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Recode
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              Confira a apresentação feita pelo Squad 53 na primeira
              apresentação do projeto EmoriÔ Digital para o programa RecodePro,
              no dia 21 de setembro.
            </Text>
            <iframe
              width="full"
              height="500"
              src="https://www.youtube.com/embed/sQxlqDZXw2Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              width="full"
              height="500"
              src="https://www.youtube.com/embed/0-oNwlBLTRg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              width="full"
              height="500"
              src="https://www.youtube.com/embed/xac08ahWT5I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <AuthorArticle
              name="Felipe Morales"
              office="Gestor de Projetos"
              image="/images/team/felipe.jpeg"
            />

            <CommentsBlog />

            <CreateComments />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article001;
