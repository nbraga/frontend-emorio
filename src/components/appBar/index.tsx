import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { AiOutlineMenu } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props {
  openDrawerAppBar: boolean;
  setOpenDrawerAppBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppBar = ({ openDrawerAppBar, setOpenDrawerAppBar }: Props) => {
  const router = useRouter();

  return (
    <Flex
      bgColor="white.200"
      color="blue.100"
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom="solid 2px"
      borderColor={"blue.100"}
      h={"60px"}
    >
      <Box>
        {!openDrawerAppBar && (
          <IconButton
            onClick={() => setOpenDrawerAppBar(true)}
            colorScheme="none"
            aria-label="Open Menu"
            icon={<AiOutlineMenu color="black" size={25} />}
          />
        )}
      </Box>

      <Stack mx={"30px"} alignItems={"center"} direction={"row"}>
        <Text fontWeight={"bold"}>Nicolas Braga</Text>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  bg={"none"}
                  _hover={{
                    bg: "none",
                  }}
                  _active={{
                    bg: "none",
                  }}
                  as={Button}
                  rightIcon={
                    isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />
                  }
                />
                <MenuList>
                  <MenuItem
                    color={"blue.100"}
                    _hover={{ bg: "none" }}
                    _focus={{
                      bg: "none",
                    }}
                    onClick={() => router.push("/")}
                  >
                    Sair
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Stack>
    </Flex>
  );
};
