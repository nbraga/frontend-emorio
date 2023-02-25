import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { LayoutDashboard } from "../../../layouts/LayoutDashboard";

const Dashboard: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <Head>
        <title>Administrador - Início</title>
      </Head>

      <LayoutDashboard>
        <Box as={Stack}>
          <Heading color={"gray.400"}>Bem vindo ADM</Heading>
          <Text>
            Aqui você terá acesso aos conteúdos da Emoriô Digital e aos usuários
            cadastrados.
          </Text>

          <Text>Basta clicar em alguma opção na sidebar!</Text>
        </Box>
      </LayoutDashboard>
    </>
  );
};

export default Dashboard;
