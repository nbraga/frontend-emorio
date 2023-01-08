import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Box, Divider, Image, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PrimaryButton } from "../../components/Button/PrimaryButton";
import { InputSingle } from "../../components/Form/InputSingle";
import { AuthContext } from "../../contexts/AuthContext";
import { noAuth } from "../../HOC/auth";
import { LoginProps } from "../../interfaces/loginProps";
import { InputPassword } from "../../components/Form/InputPassword";
import { GhostButton } from "../../components/Button/GhostButton";
import { TextButton } from "../../components/Button/TextButton";

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "A senha precisa ter no mínimo 6 caracteres."),
});

const Login: NextPage = () => {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState, setError } = useForm<LoginProps>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<LoginProps> = (values) => {
    signIn(values)
      .then((response) => {
        toast.success(response.data.message);
        router.push("/");
      })
      .catch((err) =>
        setError("email", { type: "custom", message: err.response.data.error })
      );
  };
  return (
    <>
      <Head>
        <title>Emoriô Digital - Login</title>
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
          onSubmit={handleSubmit(handleSignIn)}
          as={"form"}
          borderRadius={"3xl"}
          bg="white"
          p={10}
          opacity="0.8"
          minW={"md"}
        >
          <Stack align={"center"}>
            <Image
              boxSize="150px"
              objectFit={"contain"}
              src="/images/logo-principal.png"
            />
            <InputSingle
              type="email"
              label="Email"
              nameInput="email"
              error={formState.errors.email}
              {...register("email")}
            />
            <InputPassword
              label="Senha"
              nameInput="password"
              error={formState.errors.password}
              {...register("password")}
            />

            <PrimaryButton type="submit">Entrar</PrimaryButton>
          </Stack>
          <Stack mt={5} spacing={5}>
            <TextButton>Esqueceu sua senha?</TextButton>
            <Divider />
            <PrimaryButton onClick={() => router.push("/register")}>
              Criar uma conta
            </PrimaryButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Login;

export const getServerSideProps = noAuth((ctx: any) => {
  return {
    props: {},
  };
});
