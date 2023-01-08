import { Box, Card, CardBody, Icon, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export const BasicCard = ({ title, description, icon }: Props) => {
  return (
    <Card
      h={"full"}
      maxH={"md"}
      size={"lg"}
      p={5}
      border="solid 1px"
      borderColor="gray.100"
      _hover={{
        border: "solid 1px",
        borderColor: "orange.100",
        transition: "0.6s",
      }}
    >
      <CardBody>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Box
            display={"flex"}
            p={4}
            bg={"gray.300"}
            borderRadius={"full"}
            _hover={{
              transition: "0.6s",
              bg: "orange.100",
              color: "white",
            }}
          >
            <Icon as={icon} fontSize={20} />
          </Box>
          <Text as="b" align={"center"} color={"blue.100"} fontSize={"xl"}>
            {title}
          </Text>
          <Text align={"center"} fontSize={"sm"} color={"gray.200"}>
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
