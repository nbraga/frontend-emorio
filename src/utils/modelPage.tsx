import { Box, Flex, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <Head>
        <title>Emoriô Digital - Início</title>
      </Head>

      <h1>Teste</h1>
    </>
  );
};

export default Home;
