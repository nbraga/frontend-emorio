import {
  Box,
  FormControl,
  FormErrorMessage,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Dispatch,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";
import {
  FieldError,
  UseFormResetField,
  UseFormSetError,
} from "react-hook-form";

import { AiOutlineClose } from "react-icons/ai";
import { GhostButton } from "../Button/GhostButton";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setFile: Dispatch<SetStateAction<File>>;
  setPreviewFile: Dispatch<SetStateAction<string>>;
  previewFile: string;
  nameInput: string;
  currentImage?: string;
  setError?: UseFormSetError<any>;
  resetField?: UseFormResetField<any>;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    setFile,
    setPreviewFile,
    previewFile,
    currentImage,
    nameInput,
    label,
    setError,
    resetField,
    error,
    ...rest
  },
  ref
) => {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFilesArr: File[]) => {
    const file = acceptedFilesArr[0];
    const fileUrl = URL.createObjectURL(file);

    /*  if (file.size >= 100 * 1024 * 1024) {
      setError(nameInput, {
        type: "custom",
        message: "O tamanho da imagem deve ser no máximo de 100MB!",
      });
      return;
    }

    resetField(nameInput); */
    setFileName(file.name);
    setPreviewFile(fileUrl);
    setFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/svg+xml": [".svg"],
    },
    onDrop,
  });

  const removeFile = () => {
    setPreviewFile("");
    setFile({} as File);
  };

  useEffect(() => {
    if (currentImage)
      setPreviewFile(`${process.env.NEXT_PUBLIC_STATIC_IMAGE}${currentImage}`);
  }, []);

  return (
    <FormControl isInvalid={!!error}>
      {previewFile ? (
        <Box
          p={5}
          borderRadius={"10px"}
          border="1px solid"
          w={"full"}
          borderColor={!!error ? "red.100" : "gray.200"}
        >
          <Stack align={"center"}>
            <Text as="b" fontSize={"1rem"} color="black.100">
              {label}
            </Text>
            <Box position={"relative"}>
              <Image
                filter="auto"
                brightness="80%"
                height={"200px"}
                src={previewFile}
                alt="preview-image"
              />

              <IconButton
                size={"xs"}
                position={"absolute"}
                top={0}
                right={0}
                aria-label="close-image"
                color={"white.100"}
                bg={"gray.400"}
                icon={<AiOutlineClose />}
                onClick={removeFile}
              />
            </Box>

            <Text as="b" fontSize={"1rem"} color="orange.100">
              {fileName}
            </Text>

            <GhostButton borderRadius={"50px"} w={"full"} {...getRootProps()}>
              Alterar Imagem
              <input
                accept="image/*"
                ref={ref}
                name={nameInput}
                id={nameInput}
                {...rest}
                {...getInputProps()}
              />
            </GhostButton>
          </Stack>
        </Box>
      ) : (
        <Box
          cursor={"pointer"}
          p={5}
          borderRadius={"10px"}
          border="1px solid"
          borderColor={!!error ? "red.100" : "gray.200"}
          w={"full"}
          {...getRootProps()}
        >
          <Stack spacing={2} align={"center"}>
            <Text as="b" fontSize={"1rem"} color="black.100">
              {label}
            </Text>
            <Text fontSize={"0.8rem"} fontWeight={"bold"} color="orange.100">
              Clique para carregar o arquivo
            </Text>

            <GhostButton borderRadius={"50px"} w={"full"}>
              Selecionar Imagem
              <input
                accept="image/*"
                ref={ref}
                name={nameInput}
                id={nameInput}
                {...rest}
                {...getInputProps()}
              />
            </GhostButton>
          </Stack>
        </Box>
      )}

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const FileInput = forwardRef(InputBase);
