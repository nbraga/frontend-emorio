import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Router from "next/router";

interface Props {
  id: number;
  title: string;
  description: string;
  tag: string;
  author: string;
  image: string;
}

export const BlogCard = ({
  id,
  title,
  description,
  image,
  tag,
  author,
}: Props) => {
  return (
    <Card
      onClick={() => Router.replace(`/blogger/articles/${id}`)}
      cursor="pointer"
      size={"lg"}
      border="none"
    >
      <CardHeader p={0}>
        <Image src={image} alt={title} />
      </CardHeader>
      <CardBody p={2}>
        <Stack>
          <Text
            _hover={{ color: "orange.100" }}
            as="b"
            color={"blue.100"}
            fontSize={"2rem"}
          >
            {title}
          </Text>
          <Text fontSize={"sm"} color={"gray.200"}>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p={2}>
        <Stack
          divider={<StackDivider borderColor="gray.200" />}
          direction={"row"}
          alignItems="center"
        >
          <Text as="i" fontSize={"xs"} color={"gray.200"}>
            #{tag}
          </Text>
          <Text as="b" fontSize={"md"} color={"blue.100"}>
            {author}
          </Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};
