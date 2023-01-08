import {
  Badge,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  keyword: string;
  title: string;
  description: string;
  image: string;
  directionReverse: boolean;
  isMobile?: boolean;
}

export const AboutCard = ({
  title,
  description,
  keyword,
  image,
  directionReverse,
  isMobile,
}: Props) => {
  return (
    <Card variant={"unstyled"}>
      <CardBody p={2}>
        {isMobile ? (
          <Stack direction="column">
            <Stack maxW={"container.xl"} justifyContent={"center"}>
              <Text as="b" color={"gray.400"} fontSize={"3rem"}>
                <Badge
                  px={5}
                  bg={"orange.200"}
                  color={"blue.100"}
                  textTransform={"capitalize"}
                  fontSize={"3.5rem"}
                >
                  {keyword}
                </Badge>
                . {title}
              </Text>
              <Text fontSize={"1.8rem"} color={"gray.200"}>
                {description}
              </Text>
            </Stack>

            <Box boxSize={"full"}>
              <Image src={image} alt={title} />
            </Box>
          </Stack>
        ) : (
          <Stack direction={directionReverse ? "row-reverse" : "row"}>
            <Stack maxW={"container.xl"} justifyContent={"center"}>
              <Text as="b" color={"gray.400"} fontSize={"3rem"}>
                <Badge
                  px={5}
                  bg={"orange.200"}
                  color={"blue.100"}
                  textTransform={"capitalize"}
                  fontSize={"3.5rem"}
                >
                  {keyword}
                </Badge>
                . {title}
              </Text>
              <Text fontSize={"1.8rem"} color={"gray.200"}>
                {description}
              </Text>
            </Stack>

            <Box boxSize={"full"}>
              <Image src={image} alt={title} />
            </Box>
          </Stack>
        )}
      </CardBody>
    </Card>
  );
};
