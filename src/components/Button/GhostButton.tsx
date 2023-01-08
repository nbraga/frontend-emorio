import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const GhostButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      bg="none"
      size="lg"
      color="blue.100"
      border={"solid 1px"}
      borderColor={"blue.100"}
      borderRadius={"full"}
      w={"full"}
      _hover={{
        bg: "mix.100",
        color: "white",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
