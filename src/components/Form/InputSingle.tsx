import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, nameInput, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        <ChakraInput
          w={"full"}
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          bgColor="transparent"
          variant="filled"
          _hover={{
            borderColor: "blue.100",
          }}
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputSingle = forwardRef(InputBase);
