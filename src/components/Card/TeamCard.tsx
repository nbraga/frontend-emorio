import { Box, Card, CardBody, Link, Stack, Text } from "@chakra-ui/react";
import { TeamProps } from "../../interfaces/teamProps";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const TeamCard = ({
  name,
  office,
  github,
  image,
  instagram,
  linkedin,
}: TeamProps) => {
  return (
    <Card variant={"unstyled"} h={"full"} maxH={"md"} size={"lg"} p={5}>
      <CardBody>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Box
            position={"relative"}
            boxSize={"300px"}
            borderRadius={"full"}
            bgImage={image}
            bgPos={"center"}
            bgSize={"contain"}
          >
            <Stack
              borderRadius={"full"}
              boxSize={"300px"}
              position={"absolute"}
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
              color="white"
              spacing={5}
              opacity={0}
              _hover={{
                bg: "#17a2b8cc",
                transition: "0.8s",
                opacity: 1,
              }}
            >
              <Link p={2} border={"solid 1px"} href={instagram} isExternal>
                <FaInstagram />
              </Link>
              <Link p={2} border={"solid 1px"} href={github} isExternal>
                <FaGithub />
              </Link>
              <Link p={2} border={"solid 1px"} href={linkedin} isExternal>
                <FaLinkedin />
              </Link>
            </Stack>
          </Box>

          <Text as="b" align={"center"} color={"blue.100"} fontSize={"xl"}>
            {name}
          </Text>
          <Text align={"center"} fontSize={"sm"} color={"gray.200"}>
            {office}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
