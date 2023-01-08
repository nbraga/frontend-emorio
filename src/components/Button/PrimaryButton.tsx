import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface Props extends ChakraButtonProps {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      bg="mix.100"
      size="lg"
      color="white"
      borderRadius={"full"}
      w={"full"}
      transition="all .4s ease-in-out"
      _hover={{
        color: "#fff !important",
        bgPosition: "right center",
        boxShadow: "0px 10px 30px 0px rgba(193, 34, 10, 0.2)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
