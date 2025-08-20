import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import type { ReactNode } from "react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { base: { value: "#ffffff" }, _dark: { value: "#1a1a1a" } },
          },
          subtle: {
            value: { base: { value: "#f8f9fa" }, _dark: { value: "#2d2d2d" } },
          },
          muted: {
            value: { base: { value: "#f1f3f4" }, _dark: { value: "#404040" } },
          },
        },
        fg: {
          DEFAULT: {
            value: { base: { value: "#1a1a1a" }, _dark: { value: "#ffffff" } },
          },
          muted: {
            value: { base: { value: "#6b7280" }, _dark: { value: "#9ca3af" } },
          },
        },
      },
    },
  },
});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ColorModeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ColorModeProvider>
  );
}
