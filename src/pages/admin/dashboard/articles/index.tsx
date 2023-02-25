import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BlogCard } from "../../../../components/Card/BlogCard";
import { InputArea } from "../../../../components/Form/InputArea";
import { FileInput } from "../../../../components/Form/InputFile";
import { InputSingle } from "../../../../components/Form/InputSingle";
import { LayoutDashboard } from "../../../../layouts/LayoutDashboard";
import { listBlog } from "../../../../utils/listaBlog";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { PrimaryButton } from "../../../../components/Button/PrimaryButton";
import { GhostButton } from "../../../../components/Button/GhostButton";

interface ArticleProps {
  title: string;
  subtitle: string;
  author: string;
  tag: string;
  fileArticle: File;
}

const articleFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  subtitle: yup.string().required("Subtítulo obrigatória"),
  author: yup.string(),
  tag: yup.string(),
  fileArticle: yup.mixed(),
});

const DashboardArticles: NextPage = () => {
  const [fileArticle, setFileArticle] = useState<File>({} as File);
  const [previewArticle, setPreviewArticle] = useState("");

  const [isMobile] = useMediaQuery("(max-width: 750px)");

  const {
    register,
    handleSubmit,
    formState,
    control,
    setError,
    resetField,
    getValues,
  } = useForm<ArticleProps>({
    resolver: yupResolver(articleFormSchema),
  });

  const onSubmit: SubmitHandler<ArticleProps> = async (values) => {
    const { title, subtitle } = values;

    if (Object.keys(fileArticle).length === 0) {
      setError("fileArticle", {
        type: "custom",
        message: "Imagem desktop obrigatória",
      });

      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("subtitle", subtitle);
  };

  return (
    <>
      <Head>
        <title>Administrador - Artigos</title>
      </Head>

      <LayoutDashboard>
        <Box as={Stack}>
          <Heading color={"gray.400"}>Artigos</Heading>

          <Stack
            w={"full"}
            p={5}
            border={"solid 1px"}
            borderColor={"white.200"}
            bgColor={"white.100"}
          >
            <Heading color={"gray.400"}>Artigos cadastrados</Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={5}>
              {listBlog.map((item) => (
                <GridItem key={item.ID}>
                  <BlogCard
                    id={item.ID}
                    title={item.TITLE}
                    description={item.DESCRIPTION}
                    tag={item.TAGS}
                    author={item.AUTHOR}
                    image={item.IMAGE}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
          <Stack
            onSubmit={handleSubmit(onSubmit)}
            as={"form"}
            w={"full"}
            p={5}
            border={"solid 1px"}
            borderColor={"white.200"}
            bgColor={"white.100"}
          >
            <Heading color={"gray.400"}>Cadastrar novo artigo</Heading>
            <InputSingle label="Título" nameInput="title" />
            <InputArea label="Subtítulo" nameInput="subtitle" />
            <InputSingle label="Autor" nameInput="author" />
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Box w={"full"}>
              <FileInput
                label="Imagem principal do artigo"
                setFile={setFileArticle}
                setPreviewFile={setPreviewArticle}
                previewFile={previewArticle}
                nameInput="imgDesktop"
                /*  resetField={resetField}
              setError={setError}
              error={formState.errors.imgDesktop}
              {...register("imgDesktop")} */
              />
            </Box>
            <Flex>
              <GhostButton>Cancelar</GhostButton>
              <PrimaryButton type="submit">Cadastrar</PrimaryButton>
            </Flex>
          </Stack>
        </Box>
      </LayoutDashboard>
    </>
  );
};

export default DashboardArticles;
