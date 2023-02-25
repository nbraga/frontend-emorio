import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { MdPayments } from "react-icons/md";
import { ResponsiveSidebar } from "./ResponsiveSidebar";
import { SoloButton } from "./SoloButton";

interface Props {
  openDrawerSideBar: boolean;
  setOpenDrawerSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({ openDrawerSideBar, setOpenDrawerSideBar }: Props) => {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 750px)");

  return (
    <Stack
      minH="100vh"
      w={openDrawerSideBar ? "250px" : "75px"}
      bgColor="white.200"
      color="blue.100"
      transition="width 0.5s"
    >
      <Flex
        pt={2}
        justifyContent={openDrawerSideBar ? "space-around" : "center"}
        alignItems={"center"}
        h={"60px"}
        borderBottom="solid 2px"
        borderColor={"blue.100"}
      >
        {openDrawerSideBar ? (
          <>
            <Image
              cursor={"pointer"}
              onClick={() => router.push("/")}
              w={"5rem"}
              objectFit={"contain"}
              src="/images/logo-principal.png"
              alt="logo"
            />
            <IconButton
              aria-label="Open"
              background="none"
              _hover={{ background: "none" }}
              icon={<AiOutlineMenu size={25} />}
              onClick={() => {
                if (openDrawerSideBar) setOpenDrawerSideBar(false);
                else setOpenDrawerSideBar(true);
              }}
            />
          </>
        ) : (
          <Image
            cursor={"pointer"}
            onClick={() => router.push("/")}
            objectFit={"contain"}
            boxSize={10}
            src="/images/logo-principal.png"
          />
        )}
      </Flex>

      {openDrawerSideBar ? (
        <Box display={"flex"} flexDirection={"column"}>
          <SoloButton direction="/admin/dashboard/articles">
            <HStack align={"center"}>
              <MdPayments />
              <Text>Artigos</Text>
            </HStack>
          </SoloButton>
          <SoloButton direction="/admin/dashboard/users">
            <HStack align={"center"}>
              <HiOutlineUsers />
              <Text>Usuários</Text>
            </HStack>
          </SoloButton>
        </Box>
      ) : (
        <ResponsiveSidebar />
      )}
    </Stack>
  );
};
