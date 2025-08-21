"use client";
import {
  Box,
  
  Center,
} from "@chakra-ui/react";

import { ColorModeButton } from "./components/ui/color-mode";

const HeroSection = () => {
  

  return (
    <Box bg="myColor">
      <Center minH="dvh">
        <ColorModeButton />
      </Center>
    </Box>
  );
};

export default HeroSection;
