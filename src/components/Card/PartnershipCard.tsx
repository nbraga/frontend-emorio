import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { PartnershipProps } from "../../interfaces/partnershipProps";

export const PartnershipCard = ({
  id,
  name,
  office,
  image,
}: PartnershipProps) => {
  return (
    <Card
      variant={"unstyled"}
      alignItems="center"
      h={"full"}
      maxH={"md"}
      size={"lg"}
      p={5}
    >
      <CardBody>
        <Box
          bgImage={image}
          bgPos={"center"}
          bgSize={"cover"}
          boxSize={"300px"}
          justifyContent="flex-end"
          alignItems={"flex-end"}
          position="relative"
          _hover={{
            transform: "translate(-50px, -50px)",
            transition: "1s",
            opacity: 1,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent="flex-end"
            boxSize={"300px"}
            color={"black"}
            opacity={0}
            _hover={{
              transform: "translate(80px, 80px)",
              transition: "1s",
              opacity: 1,
            }}
          >
            <Stack p={2} alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Text as="b" align={"center"} fontSize={"xl"}>
                {name}
              </Text>
              <Text align={"center"} fontSize={"sm"}>
                {office}
              </Text>
            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};
