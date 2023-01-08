import {
  Container,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { BackgroundTop } from "../../components/BackgroundTop";
import { PartnershipCard } from "../../components/Card/PartnershipCard";
import { TeamCard } from "../../components/Card/TeamCard";
import { DividerSection } from "../../components/DividerSection";
import { AuthLayout } from "../../layouts/auth";
import { listParticipants } from "../../utils/listaParceiros";
import { listTeam } from "../../utils/listTeam";

const Team: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      <Head>
        <title>Emoriô Digital - Equipe</title>
      </Head>
      <AuthLayout>
        <BackgroundTop title="Equipe" image="/images/bg-top.jpg" />
        <Container maxWidth={"container.lg"} pt={50}>
          <DividerSection title="Nosso Time" subTitle="EQUIPE" />
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"}
            gap={6}
          >
            {listTeam.map((item) => (
              <GridItem key={item.id}>
                <TeamCard
                  name={item.name}
                  office={item.office}
                  instagram={item.instagram ? item.instagram : ""}
                  linkedin={item.linkedin}
                  github={item.github}
                  image={item.image}
                />
              </GridItem>
            ))}
          </Grid>
          <DividerSection title="Parcerias" subTitle="CONHEÇA QUEM APOIA" />
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"}
            gap={10}
            my={100}
          >
            {listParticipants.map((item) => (
              <GridItem key={item.id}>
                <PartnershipCard
                  id={item.id}
                  name={item.name}
                  office={item.office}
                  image={item.image}
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Team;
