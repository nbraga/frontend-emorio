import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  image: string;
  title: string;
}

export const BackgroundTop = ({ title, image }: Props) => {
  return (
    <Box
      display={"flex"}
      w={"full"}
      h={"xl"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${image})`}
      bgPosition="center"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      justifyContent={"center"}
    >
      <Text as="b" fontSize={"3rem"} mt={"200"} color={"white"}>
        {title}
      </Text>
    </Box>
  );
};
