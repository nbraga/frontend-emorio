import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subTitle: string;
}

export const DividerSection = ({ title, subTitle }: Props) => {
  return (
    <Stack my={20} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={"xs"} textTransform="uppercase">
        {subTitle}
      </Text>
      <Heading fontSize={"4xl"}>{title}</Heading>
      <Box w={100} bg={"orange.100"} h={0.5} />
    </Stack>
  );
};
