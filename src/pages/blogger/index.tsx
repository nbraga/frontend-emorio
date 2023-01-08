import {
  Container,
  Divider,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { BiSearch } from "react-icons/bi";
import { BackgroundTop } from "../../components/BackgroundTop";
import { PrimaryButton } from "../../components/Button/PrimaryButton";
import { TextButton } from "../../components/Button/TextButton";
import { BlogCard } from "../../components/Card/BlogCard";
import { AuthLayout } from "../../layouts/auth";
import { listBlog } from "../../utils/listaBlog";

const Blogger: NextPage = () => {
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
        <BackgroundTop title="Artigos" image="/images/bg-top.jpg" />
        <Container maxWidth={"container.lg"} pt={50}>
          <Stack display={isMobile ? "block" : "none"} p={5} bg={"white.200"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiSearch color="gray.300" />
              </InputLeftElement>

              <Input placeholder="Pesquisar palavra-chave" />
            </InputGroup>
            <PrimaryButton>Pesquisar</PrimaryButton>
          </Stack>
          <Stack
            display={isMobile ? "block" : "none"}
            mt={5}
            p={5}
            bg={"white.200"}
            spacing={5}
          >
            <Text as="b" fontSize={"1.2rem"}>
              Tags
            </Text>
            <Divider />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Cultura
                </TextButton>
              </GridItem>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Educação
                </TextButton>
              </GridItem>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Recode
                </TextButton>
              </GridItem>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Projetos
                </TextButton>
              </GridItem>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Tecnologia
                </TextButton>
              </GridItem>
              <GridItem>
                <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                  Zonas Rurais
                </TextButton>
              </GridItem>
            </Grid>
          </Stack>

          <Grid
            templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
            my={10}
            gap={6}
          >
            <GridItem colSpan={2}>
              <Stack spacing={10}>
                {listBlog.map((item) => (
                  <BlogCard
                    key={item.ID}
                    id={item.ID}
                    title={item.TITLE}
                    description={item.DESCRIPTION}
                    tag={item.TAGS}
                    author={item.AUTHOR}
                    image={item.IMAGE}
                  />
                ))}
              </Stack>
            </GridItem>
            <GridItem display={isMobile ? "none" : "block"}>
              <Stack p={5} bg={"white.200"}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <BiSearch color="gray.300" />
                  </InputLeftElement>

                  <Input placeholder="Pesquisar palavra-chave" />
                </InputGroup>
                <PrimaryButton>Pesquisar</PrimaryButton>
              </Stack>
              <Stack mt={5} p={5} bg={"white.200"} spacing={5}>
                <Text as="b" fontSize={"1.2rem"}>
                  Tags
                </Text>
                <Divider />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Cultura
                    </TextButton>
                  </GridItem>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Educação
                    </TextButton>
                  </GridItem>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Recode
                    </TextButton>
                  </GridItem>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Projetos
                    </TextButton>
                  </GridItem>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Tecnologia
                    </TextButton>
                  </GridItem>
                  <GridItem>
                    <TextButton border={"1px solid"} bg={"white.100"} p={1}>
                      Zonas Rurais
                    </TextButton>
                  </GridItem>
                </Grid>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Blogger;
