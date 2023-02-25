import { Box, Flex, Stack, Image, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { PrimaryButton } from "../components/Button/PrimaryButton";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>RESZON - 404</title>
      </Head>

      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"full"}
        h={"100vh"}
        bgImage={"/images/waves/wave-top.svg"}
        bgPosition={"top"}
        bgRepeat={"no-repeat"}
        bgColor={"white.200"}
      >
        <Flex
          justifyContent={"center"}
          alignItems="center"
          w={"full"}
          bgColor={"black.100"}
          h={100}
        >
          <Image
            objectFit={"contain"}
            boxSize="150px"
            src="/images/logo-principal.png"
            alt="logo"
          />
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          mt={"50px"}
        >
          <Stack
            bgColor={"white"}
            align={"center"}
            w={"80%"}
            borderRadius={"2xl"}
            padding={"50px"}
          >
            <Heading>Oops, a página não foi encontrada!</Heading>
            <Image
              boxSize={"500px"}
              objectFit="contain"
              src="/images/img-not-found.png"
              alt="not-found"
            />
            <PrimaryButton w={"xs"} onClick={() => router.back()}>
              Retornar
            </PrimaryButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
