import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { AuthorArticle } from "../../../components/AuthorArticle";
import { AuthLayout } from "../../../layouts/auth";

const Article002: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      <Head>
        <title>Emoriô Digital - Artigos</title>
      </Head>
      <AuthLayout>
        <Container maxWidth={"container.lg"} py={150}>
          <Stack spacing={5}>
            <Heading
              fontSize={isMobile ? "2rem" : "5rem"}
              textAlign={"center"}
              color="orange.100"
            >
              Projeto Arte e Sustentabilidade
            </Heading>
            <Image src="/images/blog/arte-sustentavel.jpeg" alt="bgImage" />

            <Stack spacing={0}>
              <Text as={"b"} fontSize={"1.5rem"} color={"blue.100"}>
                Projeto Arte e Sustentabilidade
              </Text>
              <Text as="i" fontSize={"0.8rem"}>
                #Projetos
              </Text>
            </Stack>

            <Text fontSize={"1rem"} color="gray.200">
              Leciono como professora de arte na rede municipal de ensino de São
              Bernardo do Campo desde 2015, para os alunos do ensino fundamental
              I, realizando diversos projetos interdisciplinares, alguns em
              parcerias com outros professores. No primeiro semestre de 2022,
              foi realizado com as turmas do 5º ano, da unidade escolar em que
              leciono, o projeto Arte e Sustentabilidade, projeto ao qual tive
              muito carinho e orgulho pelos alunos em desenvolvê-lo com tanta
              dedicação, dessa forma venho compartilhar um pouquinho desse
              projeto e que possamos refletir sobre nossas ações no estado de
              emergência em que se encontra nossa mãe natureza, nosso planeta
              Terra.
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              O objetivo principal do projeto foi apresentar aos alunos como a
              arte tem a função crítica, investigativa e imaginativa na
              participação cultural e social de diferentes povos em diferentes
              tempos e contextos. Na situação de emergência atual em que se
              encontra nosso planeta devido as alterações sofridas pela natureza
              e estimuladas pela sociedade de consumo, a arte pode buscar
              estímulos para reflexões, diálogos e práticas de respeito à
              natureza. O produto final do projeto foi a exposição de telas
              feitas com materiais recicláveis.
            </Text>
            <Flex bg={"white.200"} p={5}>
              <Box
                borderLeft={"solid 3px"}
                borderColor={"black"}
                bg={"white"}
                p={5}
              >
                <Text as="i" fontSize={"0.8rem"} color="gray.200">
                  As atividades foram realizadas em um horário dedicado à aula
                  de projeto, uma vez por semana, onde as propostas buscaram:
                  Estimular os alunos a problematizarem questões ambientais,
                  políticas, sociais, científicas e culturais por meio de
                  pesquisas, onde após leituras de textos sobre arte, meio
                  ambiente e sustentabilidade, realizamos rodas de conversa
                  refletindo sobre os temas no nosso dia a dia, como
                  contribuímos para o bem e para o mal no cuidado com o planeta
                  e debatemos como a arte pode ser um veículo de comunicação, de
                  expressão que está em todas as nossas manifestações.
                </Text>
              </Box>
            </Flex>
            <Text fontSize={"1rem"} color="gray.200">
              Conheceram e explorara obras de artistas que se apropriam de
              materiais recicláveis para a composição de suas obras, como do
              artista Vik Muniz, onde além de apreciarem imagens de obras,
              reproduzirem por meio do desenho, também assistiram ao
              documentário Lixo Extraordinário, onde o artista mostra a produção
              de suas obras por meio de materiais recicláveis coletados pelos
              catadores no lixão de Gramacho no Rio de Janeiro, hoje desativado,
              mas sendo por muito tempo o maior lixão da américa latina.
            </Text>
            <Text fontSize={"1rem"} color="gray.200">
              Após o filme realizamos novamente roda de conversa onde
              relacionaram a produção de lixo aos problemas causados pelo
              consumo excessivo, refletindo sobre o consumo consciente
              considerando a ampliação de hábitos de redução, reuso e reciclagem
              de materiais consumidos (os 3 Rs da sustentabilidade). Elaboraram
              caixas de coleta seletiva, de acordo com as cores de cada material
              que foram coletados por eles para a elaboração das telas.
            </Text>
            <iframe
              width="full"
              height="500"
              src="https://www.youtube.com/embed/61eudaWpWb8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <Text fontSize={"1rem"} color="gray.200">
              Se empenharam na coleta de materiais, que juntavam com as
              famílias, como lacre de latinhas de alumínio, tampinhas de
              plástico, garrafas pet, embalagens de papéis coloridos, entre
              outros. Para a elaboração das telas foram realizados grupos, onde
              cada um realizava alguma tarefa, como desenhar nas telas desenhos
              pesquisados sobre o tema trabalhado, cortar papéis que coletaram e
              dividir por cores, selecionar os materiais e colar nas telas.
            </Text>
            <Image
              src="/images/articles/arte-sustentavel01.jpeg"
              alt="bgImage"
            />
            <Text fontSize={"1rem"} color="gray.200">
              As telas foram expostas no sábado letivo de 11 de junho,
              compartilhando com todo o ambiente escolar e a comunidade o
              trabalho realizado por eles. Também comporam a exposição fotos do
              processo, imagens de desastres ambientais como alertas, as caixas
              de coleta seletiva, e móbiles com mensagens dos alunos sobre o que
              acharam importante de tudo que aprenderam.
            </Text>
            <Image
              src="/images/articles/arte-sustentavel02.jpeg"
              alt="bgImage"
            />
            <Text fontSize={"1rem"} color="gray.200">
              Foi um trabalho realizado com carinho e dedicação ao qual fiquei
              muito orgulhosa com o resultado e envolvimento dos alunos. E que
              de alguma forma tocou e nos fez refletir sobre a ação do homem
              nesse processo de degradação em que se encontra nosso planeta e a
              perspectiva para as futuras gerações.
            </Text>
            <Image
              src="/images/articles/arte-sustentavel03.jpeg"
              alt="bgImage"
            />

            <AuthorArticle
              name="Andréia Rodrigues"
              office="Integrante do Ponto de Culturas Mucambos de Raiz Nagô"
              image="/images/participants/andreia.jpeg"
            />
          </Stack>
        </Container>
      </AuthLayout>
    </>
  );
};

export default Article002;
