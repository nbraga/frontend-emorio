import {
  Container,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { BackgroundTop } from "../../components/BackgroundTop";
import { PrimaryButton } from "../../components/Button/PrimaryButton";
import { DividerSection } from "../../components/DividerSection";
import { InputArea } from "../../components/Form/InputArea";
import { InputSingle } from "../../components/Form/InputSingle";
import { AuthLayout } from "../../layouts/auth";

const Contact: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      <Head>
        <title>Emoriô Digital - Contato</title>
      </Head>
      <AuthLayout>
        <BackgroundTop title="Contato" image="/images/bg-top.jpg" />
        <Container maxWidth={"container.lg"} my={50}>
          <DividerSection
            title="Entre em contato"
            subTitle="Dúvidas ou sugestões"
          />
          <Stack spacing={5}>
            <Heading color={"blue.100"}>Formulário de Contato</Heading>
            <InputSingle label="Assunto" nameInput="subject" />
            <InputArea label="Descrição" nameInput="description" />

            <Stack direction={isMobile ? "column" : "row"}>
              <InputSingle label="Nome" nameInput="name" />
              <InputSingle label="Email" nameInput="email" />
            </Stack>
            <PrimaryButton w={isMobile ? "full" : "sm"}>
              Enviar Mensagem
            </PrimaryButton>
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Contact;
