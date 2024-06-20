"use client";
import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
// import chakraTheme from "@chakra-ui/theme";

// import "react-tooltip/dist/react-tooltip.css";

interface Props extends PropsWithChildren {}

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const theme = extendTheme({
//   components: {
//     Button,
//     Skeleton,
//   },
// });

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider
        // theme={theme}
        toastOptions={{ defaultOptions: { duration: 3000, isClosable: true } }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Provider;
