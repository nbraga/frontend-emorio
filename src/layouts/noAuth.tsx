import React from "react";

interface Props {
  children: React.ReactNode;
}

export const NoAuthLayout = ({ children }: Props) => {
  return <>{children}</>;
};
