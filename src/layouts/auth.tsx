import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
