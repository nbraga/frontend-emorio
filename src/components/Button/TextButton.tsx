import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface Props extends ChakraButtonProps {
  children: React.ReactNode;
}

export const TextButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      variant={"link"}
      size="md"
      color="blue.100"
      w={"full"}
      _hover={{
        color: "orange.100",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
