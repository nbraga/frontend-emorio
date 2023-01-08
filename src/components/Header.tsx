import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TextButton } from "./Button/TextButton";

import { AiOutlineMenu } from "react-icons/ai";

import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useCookies } from "react-cookie";

export const Header = () => {
  const { signOut } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["@emorio.token"]);

  const [token, setToken] = useState("");

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const token = cookies["@emorio.token"];

    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Flex position={"fixed"} zIndex={5} w={"full"} h={"100px"} bg={"gray.100"}>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"container.xl"}
      >
        <Box>
          <Image
            onClick={() => Router.push("/")}
            cursor="pointer"
            boxSize="100px"
            objectFit="contain"
            src="/images/logo-principal.png"
            alt="Logo"
          />
        </Box>
        {isMobile ? (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <IconButton aria-label="menu" icon={<AiOutlineMenu />} />
            </PopoverTrigger>
            <PopoverContent w={200}>
              <PopoverArrow />
              <PopoverBody border={"none"} bg="white.200">
                <Stack>
                  <TextButton onClick={() => Router.push("/")}>
                    Início
                  </TextButton>
                  <TextButton onClick={() => Router.push("/blogger")}>
                    Blog
                  </TextButton>
                  <TextButton onClick={() => Router.push("/about")}>
                    Sobre
                  </TextButton>
                  <TextButton onClick={() => Router.push("/team")}>
                    Equipe
                  </TextButton>
                  <TextButton onClick={() => Router.push("/contact")}>
                    Contato
                  </TextButton>
                  <TextButton>Projetos</TextButton>
                  {token && <TextButton onClick={signOut}>Deslogar</TextButton>}
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Stack direction={"row"} spacing={10}>
            <TextButton onClick={() => Router.push("/")}>Início</TextButton>
            <TextButton onClick={() => Router.push("/blogger")}>
              Blog
            </TextButton>
            <TextButton onClick={() => Router.push("/about")}>Sobre</TextButton>
            <TextButton onClick={() => Router.push("/team")}>Equipe</TextButton>
            <TextButton onClick={() => Router.push("/contact")}>
              Contato
            </TextButton>
            <TextButton>Projetos</TextButton>
            {token && <TextButton onClick={signOut}>Deslogar</TextButton>}
          </Stack>
        )}
      </Container>
    </Flex>
  );
};
