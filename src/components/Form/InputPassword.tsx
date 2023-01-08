import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, nameInput, ...rest },
  ref
) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
          type={show ? "text" : "password"}
          ref={ref}
          {...rest}
        />
        {(nameInput === "password" ||
          nameInput === "confirmPassword" ||
          nameInput === "newPassword") && (
          <InputRightElement>
            <Icon
              onClick={handleClick}
              as={!show ? AiFillEye : AiFillEyeInvisible}
              fontSize="20"
            />
          </InputRightElement>
        )}
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputPassword = forwardRef(InputBase);
