
"use client"

import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseTrigger,
  DrawerBackdrop,
} from "../components/ui/drawer"
import { Button, VStack, HStack, Text } from "@chakra-ui/react"
import { ColorModeButton } from "../components/ui/color-mode" // <-- your color mode button
import { LuMenu } from "react-icons/lu"

export function NavigationDrawer() {
  return (
    <DrawerRoot>
      {/* Top Nav */}
      <HStack
        as="nav"
        justify="space-between"
        px="5"
        py="4"
        shadow="sm"
        bg="white"
        _dark={{ bg: "gray.900" }}
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          FinancePro
        </Text>

        <HStack gap="3">
          {/* Theme Toggle */}
          <ColorModeButton />

          {/* Drawer Menu Trigger */}
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Open Menu"
              fontWeight="medium"
            >
              <LuMenu style={{ marginRight: "0.5em" }} />
              Menu
            </Button>
          </DrawerTrigger>
        </HStack>
      </HStack>

      {/* Drawer */}
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader
          borderBottom="1px solid"
          borderColor="gray.200"
          _dark={{ borderColor: "gray.700" }}
        >
          Navigation
          <DrawerCloseTrigger />
        </DrawerHeader>

        <DrawerBody>
          <VStack align="stretch" gap="4" mt="6">
            <Button
              variant="outline"
              size="lg"
              borderRadius="lg"
              fontWeight="semibold"
              colorScheme="blue"
            >
              Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              borderRadius="lg"
              fontWeight="semibold"
              colorScheme="teal"
            >
              Investments
            </Button>
            <Button
              variant="outline"
              size="lg"
              borderRadius="lg"
              fontWeight="semibold"
              colorScheme="purple"
            >
              Loans
            </Button>
            <Button
              variant="outline"
              size="lg"
              borderRadius="lg"
              fontWeight="semibold"
              colorScheme="pink"
            >
              Insurance
            </Button>
            <Button
              variant="outline"
              size="lg"
              borderRadius="lg"
              fontWeight="semibold"
              colorScheme="orange"
            >
              Profile
            </Button>
          </VStack>
        </DrawerBody>

        <DrawerFooter
          borderTop="1px solid"
          borderColor="gray.200"
          _dark={{ borderColor: "gray.700" }}
        >
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} FinancePro
          </Text>
        </DrawerFooter>
      </DrawerContent>
      
    </DrawerRoot>
  )
}
