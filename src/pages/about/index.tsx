import {
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { BiRestaurant } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { BackgroundTop } from "../../components/BackgroundTop";
import { AboutCard } from "../../components/Card/AboutCard";
import { BasicCard } from "../../components/Card/BasicCard";
import { DividerSection } from "../../components/DividerSection";
import { TitleUppercase } from "../../components/TitleUppercase";
import { AuthLayout } from "../../layouts/auth";

import { FaReact } from "react-icons/fa";

import { SiSkyliner } from "react-icons/si";

import { GiSupersonicArrow } from "react-icons/gi";

const About: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      <Head>
        <title>Emoriô Digital - Blog</title>
      </Head>
      <AuthLayout>
        <BackgroundTop title="Sobre Nós" image="/images/bg-top.jpg" />
        <DividerSection title="Conheça a EmoriÔ" subTitle="APRESENTAÇÃO" />
        <Stack spacing={10}>
          <AboutCard
            keyword="Missão"
            title="Apoiar projetos sócio culturais."
            description="Ajudar na erradicação do analfabetismo através de ferramentas digitais, apoiando iniciativas em zonas rurais, para melhoria da qualidade de vida, garantir direitos e bem estar."
            image="/images/about/missao.jpg"
            directionReverse={false}
            isMobile={isMobile}
          />
          <AboutCard
            keyword="Visão"
            title="Contribuir com iniciativas transformadoras."
            description="Nosso projeto pretende apoiar 05 projetos em zonas rurais, campos e florestas. Atingir 300 pessoas diretamente e contribuir na formação de 3.000 usuários do blog."
            image="/images/about/visao.jpg"
            directionReverse={true}
            isMobile={isMobile}
          />
          <AboutCard
            keyword="Valores"
            title="Construção de um Mundo melhor."
            description="Cidadania, Ética, Equidade, Inovação, Transparência, Responsabilidade social, Democratização da informação, Diversidade e Pluralidade."
            image="/images/about/valores.jpg"
            directionReverse={false}
            isMobile={isMobile}
          />
        </Stack>

        <DividerSection title="Ações Utilizadas" subTitle="ALIADAS" />
        <Container maxWidth={"container.xl"} py={100}>
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)"}
            gap={10}
          >
            <GridItem colSpan={1}>
              <BasicCard
                title="Cultura"
                description="Nossa agência disponibiliza diversos projetos culturais que visam a melhoria da vida de cada um."
                icon={BiRestaurant}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Qualificações"
                description="Por conta das parcerias, podemos oferecer também qualificações para aqueles que estão dando esse primeiro passo."
                icon={SiSkyliner}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Empregabilidade"
                description="Após a participação e aprendizado, é verificado quais dos participantes já estão aptos para ingressar no mercado de trabalho."
                icon={BsCardChecklist}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <BasicCard
                title="Tecnologia"
                description="A tecnologia é uma de nossas maiores aliadas no combate ao analfabetismo."
                icon={FaReact}
              />
            </GridItem>
          </Grid>
        </Container>

        <Container maxWidth={"container.xl"} my={100}>
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={6}
          >
            <GridItem>
              <Image
                boxSize={isMobile ? "full" : "xl"}
                src="/images/about/doacao.jpg"
                alt="Doações"
              />
            </GridItem>
            <GridItem>
              <Stack spacing={10}>
                <TitleUppercase title="SEJA UM PARCEIRO" />

                <Text as="b" color={"blue.100"} fontSize={"4xl"}>
                  Apoiar nossa agência na mudança de vidas
                </Text>
                <Text color={"blue.100"} fontSize={"sm"}>
                  Só podemos melhorar o futuro de todos, com a ajuda de todos!
                  Estamos em uma sociedade que luta pela sobrivência e as
                  pessoas que precisam de ajuda, acabam sofrendo com esse tipo
                  de pensamento.
                </Text>
                <Flex gap={5} alignItems={"center"}>
                  <MdEditNote />
                  <Text fontSize={"sm"}>Ajude por meio de doações</Text>
                </Flex>
                <Flex gap={5} alignItems={"center"}>
                  <TfiRulerPencil />
                  <Text fontSize={"sm"}>
                    Enviando cestas básicas e materiais escolares
                  </Text>
                </Flex>
                <Flex gap={5} alignItems={"center"}>
                  <GiSupersonicArrow />
                  <Text fontSize={"sm"}>
                    Gravando vídeos aulas e cursos para a plataforma
                  </Text>
                </Flex>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </AuthLayout>
    </>
  );
};

export default About;
