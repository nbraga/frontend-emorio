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
import { LayoutDashboard } from "../../../../layouts/LayoutDashboard";

const DashboardUsers: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <Head>
        <title>Administrador - Usuários</title>
      </Head>

      <LayoutDashboard>
        <Box as={Stack}>
          <Heading color={"gray.400"}>Usuários</Heading>
        </Box>
      </LayoutDashboard>
    </>
  );
};

export default DashboardUsers;
