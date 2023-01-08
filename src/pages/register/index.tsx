import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { PrimaryButton } from "../../components/Button/PrimaryButton";
import { InputSingle } from "../../components/Form/InputSingle";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { GhostButton } from "../../components/Button/GhostButton";
import { InputPassword } from "../../components/Form/InputPassword";
import { AuthContext } from "../../contexts/AuthContext";
import { noAuth } from "../../HOC/auth";
import { RegisterProps } from "../../interfaces/loginProps";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  lastName: yup.string().required("Sobrenome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "A senha precisa ter no mínimo 6 caracteres."),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não são iguais")
    .min(6, "A senha deve ter no minímo 6 caracteres"),
});

const Register: NextPage = () => {
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);

  const { register, handleSubmit, formState, setError } =
    useForm<RegisterProps>({
      resolver: yupResolver(registerFormSchema),
    });

  const handleRegister: SubmitHandler<RegisterProps> = async (values) => {
    registerUser(values)
      .then((res) => {
        toast.success(res.data.message), router.push("/");
      })
      .catch((err) =>
        setError("email", { type: "custom", message: err.response.data.error })
      );
  };
  return (
    <>
      <Head>
        <title>Emoriô Digital - Cadastro</title>
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgImage="/images/bg-login.jpg"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box
          onSubmit={handleSubmit(handleRegister)}
          as={"form"}
          borderRadius={"3xl"}
          bg="white"
          p={10}
          opacity="0.8"
          minW={"md"}
        >
          <Stack spacing={5} align={"center"}>
            <Image
              boxSize="150px"
              objectFit={"contain"}
              src="/images/logo-principal.png"
            />
            <Text>Dados de acesso</Text>
            <InputSingle
              label="Email"
              nameInput="email"
              error={formState.errors.email}
              {...register("email")}
            />
            <Stack direction={"row"}>
              <InputPassword
                label="Senha"
                nameInput="password"
                error={formState.errors.password}
                {...register("password")}
              />
              <InputPassword
                label="Confirme sua senha"
                nameInput="confirmPassword"
                error={formState.errors.confirmPassword}
                {...register("confirmPassword")}
              />
            </Stack>
            <Text>Dados Pessoais</Text>
            <Stack w={"full"} direction={"row"}>
              <InputSingle
                label="Nome"
                nameInput="name"
                error={formState.errors.name}
                {...register("name")}
              />
              <InputSingle
                label="Sobrenome"
                nameInput="lastName"
                error={formState.errors.lastName}
                {...register("lastName")}
              />
            </Stack>
            <Stack w={"full"} direction={"row"}>
              <GhostButton onClick={() => router.push("/")}>
                Cancelar
              </GhostButton>
              <PrimaryButton type="submit">Criar conta</PrimaryButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Register;

export const getServerSideProps = noAuth((ctx: any) => {
  return {
    props: {},
  };
});
