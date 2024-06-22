import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
};

export default MyApp;
