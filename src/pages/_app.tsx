import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/AuthContext";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";

import { theme } from "../styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer autoClose={3000} />
      <CookiesProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </CookiesProvider>
    </ChakraProvider>
  );
}
