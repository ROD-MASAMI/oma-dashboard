"use client";

import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const _theme = extendTheme(theme);
  const _queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={_queryClient}>
      <CacheProvider>
        <ChakraProvider theme={_theme}>{children}</ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
