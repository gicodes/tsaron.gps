import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import SwitchHeader from "@/pages/components/switch";
import AppHeader from "@/pages/components/header";
import LocationProvider from "./_provider";
import { Inter } from "next/font/google";
import "@/pages/components/globals.css";
import theme from "./_theme";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <LocationProvider>
      <SessionProvider session={session}>
        <AppHeader>
          <ChakraProvider theme={theme}>
            <VStack>
              <Box w="full" maxW="container.md" minH="100vh" p="4">
                <SwitchHeader />
                <Component className={inter.className} {...pageProps} />
              </Box>
            </VStack>
          </ChakraProvider>
        </AppHeader>
      </SessionProvider>
    </LocationProvider>
  );
}
