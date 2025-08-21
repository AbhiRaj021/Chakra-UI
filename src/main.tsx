import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode.tsx';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#f5e6c8' },
        secondary: { value: '#a8b5a2' },
      },
    },
    semanticTokens: {
      colors: {
        myColor: {
          value: { base: '{colors.primary}', _dark: '{colors.secondary}' },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
