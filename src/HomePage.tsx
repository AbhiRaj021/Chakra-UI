"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  VStack,
  HStack,
  Heading,
  Text,
  Grid,
  Drawer,
  Flex,
  IconButton,
  Badge,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { Tooltip } from "./components/ui/tooltip";
import { DrawerContent } from "./components/ui/drawer";
// import { ColorModeButton } from "./components/ui/color-mode";
import { Avatar } from "./components/ui/avatar";
import { Alert } from "./components/ui/alert";
import { ProgressRoot, ProgressBar } from "./components/ui/progress";
import { Rating } from "./components/ui/rating";
import {
  FiMenu,
  FiHome,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiStar,
  FiTrendingUp,
  FiZap,
  FiGlobe,
  FiShield,
  FiTarget,
} from "react-icons/fi";

const HeroSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { icon: FiHome, label: "Dashboard", badge: "3", color: "blue" },
    { icon: FiUser, label: "Profile", badge: "Pro", color: "purple" },
    { icon: FiSettings, label: "Settings", badge: "", color: "gray" },
    { icon: FiHelpCircle, label: "Help Center", badge: "New", color: "green" },
  ];

  const features = [
    {
      icon: FiZap,
      title: "Lightning Fast",
      description: "Built for speed and performance",
      color: "yellow",
      progress: 95,
    },
    {
      icon: FiShield,
      title: "Secure by Default",
      description: "Enterprise-grade security features",
      color: "green",
      progress: 88,
    },
    {
      icon: FiGlobe,
      title: "Global Scale",
      description: "Deploy anywhere in the world",
      color: "blue",
      progress: 92,
    },
    {
      icon: FiTarget,
      title: "Precision Tools",
      description: "Accurate analytics and insights",
      color: "purple",
      progress: 87,
    },
  ];

  return (
    <Box
      minH="100vh"
      w="100vw"
      bg="white"
      _dark={{ bg: "gray.900" }}
      m={0}
      p={0}
    >
      {/* Navigation Header */}
      <Box
        bg="white"
        _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        shadow="sm"
        px={{ base: 4, md: 8 }}
        py={4}
        w="100%"
        borderBottomWidth="1px"
        borderColor="gray.200"
      >
        <Flex justify="space-between" align="center" maxW="none">
          <HStack gap={{ base: 2, md: 4 }}>
            <Tooltip content="Open navigation menu" showArrow>
              <IconButton
                aria-label="Menu"
                variant="ghost"
                onClick={() => setIsDrawerOpen(true)}
                size={{ base: "sm", md: "md" }}
                _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
              >
                <FiMenu />
              </IconButton>
            </Tooltip>

            <Heading
              size={{ base: "md", md: "lg" }}
              color="blue.600"
              _dark={{ color: "blue.300" }}
              display={{ base: "none", sm: "block" }}
            >
              ChakraLand
            </Heading>

            <Heading
              size="md"
              color="blue.600"
              _dark={{ color: "blue.300" }}
              display={{ base: "block", sm: "none" }}
            >
              CL
            </Heading>

            <Badge
              colorPalette="purple"
              variant="solid"
              size={{ base: "sm", md: "md" }}
            >
              v3.0
            </Badge>
          </HStack>

          <HStack gap={{ base: 1, md: 2 }}>
            {/* <Tooltip content="Toggle dark/light mode" showArrow>
              <ColorModeButton size={{ base: "sm", md: "md" }} />
            </Tooltip> */}
            <Tooltip content="Your profile settings" showArrow>
              <Avatar
                name="John Doe"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                size={{ base: "xs", md: "sm" }}
              />
            </Tooltip>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box
        w="100%"
        py={{ base: 10, md: 16, lg: 20 }}
        px={{ base: 4, sm: 6, md: 8, lg: 12 }}
      >
        <VStack gap={{ base: 6, md: 8 }} textAlign="center" maxW="none">
          <Tooltip
            content="Welcome to the future of web development!"
            showArrow
          >
            <Badge
              colorPalette="blue"
              variant="subtle"
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              px={{ base: 3, md: 4 }}
              py={2}
            >
              <FiStar style={{ marginRight: "8px" }} />
              New Release Available
            </Badge>
          </Tooltip>

          <Heading
            size={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            bgGradient="to-r"
            gradientFrom="blue.400"
            gradientTo="purple.600"
            bgClip="text"
            lineHeight={{ base: "shorter", md: "short" }}
            w="100%"
          >
            Build Amazing UIs with Chakra Components
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="gray.600"
            _dark={{ color: "gray.300" }}
            maxW={{ base: "100%", md: "4xl", lg: "5xl" }}
            lineHeight="tall"
            px={{ base: 0, md: 4 }}
          >
            Experience the power of our comprehensive UI library with 50+
            components, beautiful animations, and lightning-fast performance.
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            gap={4}
            pt={4}
            align="center"
            justify="center"
            w={{ base: "100%", sm: "auto" }}
          >
            <Tooltip content="Start building your dream project" showArrow>
              <Button
                size={{ base: "md", md: "lg" }}
                colorScheme="blue"
                w={{ base: "100%", sm: "auto" }}
                minW={{ sm: "160px" }}
                bg="blue.500"
                _hover={{ bg: "blue.600" }}
                _dark={{ bg: "blue.600", _hover: { bg: "blue.700" } }}
              >
                <FiZap style={{ marginRight: "8px" }} />
                Get Started Free
              </Button>
            </Tooltip>
            <Tooltip content="Explore live examples and demos" showArrow>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="outline"
                w={{ base: "100%", sm: "auto" }}
                minW={{ sm: "140px" }}
                borderColor="gray.300"
                color="gray.700"
                _hover={{ bg: "gray.50", borderColor: "gray.400" }}
                _dark={{
                  borderColor: "gray.600",
                  color: "gray.200",
                  _hover: { bg: "gray.800", borderColor: "gray.500" },
                }}
              >
                <FiTrendingUp style={{ marginRight: "8px" }} />
                View Demos
              </Button>
            </Tooltip>
          </Stack>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box
        w="100%"
        pb={{ base: 10, md: 20 }}
        px={{ base: 4, sm: 6, md: 8, lg: 12 }}
      >
        <VStack gap={{ base: 8, md: 12 }}>
          <VStack gap={4} textAlign="center">
            <Heading
              size={{ base: "xl", md: "2xl" }}
              color="gray.900"
              _dark={{ color: "white" }}
            >
              Why Choose ChakraLand?
            </Heading>
            <Text
              color="gray.600"
              _dark={{ color: "gray.300" }}
              fontSize={{ base: "md", md: "lg" }}
              px={{ base: 0, md: 4 }}
              maxW={{ base: "100%", md: "4xl" }}
            >
              Discover the features that make us stand out
            </Text>
          </VStack>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
            w="100%"
            maxW="none"
          >
            {features.map((feature, index) => (
              <Tooltip
                key={index}
                content={`${feature.progress}% performance score`}
                showArrow
              >
                <Card.Root
                  variant="elevated"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "xl",
                  }}
                  height="full"
                  w="100%"
                  bg="white"
                  _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                  borderWidth="1px"
                  borderColor="gray.200"
                >
                  <Card.Body gap={{ base: 3, md: 4 }} p={{ base: 4, md: 6 }}>
                    <Box
                      p={{ base: 2, md: 3 }}
                      borderRadius="lg"
                      bg={`${feature.color}.100`}
                      _dark={{ bg: `${feature.color}.900` }}
                      display="inline-flex"
                      w="fit-content"
                    >
                      <Box
                        as={feature.icon}
                        fontSize={{ base: "20px", md: "24px" }}
                        color={`${feature.color}.600`}
                        _dark={{ color: `${feature.color}.300` }}
                      />
                    </Box>

                    <VStack align="start" gap={{ base: 2, md: 3 }} flex="1">
                      <Heading
                        size={{ base: "sm", md: "md" }}
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        {feature.title}
                      </Heading>
                      <Text
                        color="gray.600"
                        _dark={{ color: "gray.300" }}
                        fontSize={{ base: "sm", md: "md" }}
                        lineHeight="short"
                      >
                        {feature.description}
                      </Text>
                      <Box w="100%" mt="auto">
                        <ProgressRoot
                          value={feature.progress}
                          colorScheme={feature.color}
                          size="sm"
                          w="100%"
                        >
                          <ProgressBar />
                        </ProgressRoot>
                      </Box>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Tooltip>
            ))}
          </Grid>
        </VStack>
      </Box>

      {/* Testimonial Section */}
      <Box
        bg="gray.50"
        _dark={{ bg: "gray.800" }}
        py={{ base: 10, md: 20 }}
        w="100%"
      >
        <Box maxW="6xl" mx="auto" px={{ base: 4, sm: 6, md: 8 }}>
          <VStack gap={{ base: 6, md: 8 }} textAlign="center">
            <Tooltip
              content="Real feedback from our amazing community"
              showArrow
            >
              <Rating
                value={5}
                colorScheme="yellow"
                size={{ base: "md", md: "lg" }}
              />
            </Tooltip>

            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontStyle="italic"
              lineHeight="tall"
              px={{ base: 0, md: 4 }}
              color="gray.800"
              _dark={{ color: "gray.100" }}
            >
              "ChakraLand has completely transformed how we build user
              interfaces. The component library is incredibly comprehensive and
              the developer experience is just phenomenal!"
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              align="center"
              justify="center"
            >
              <Avatar
                name="Sarah Johnson"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b175a3bae?w=100"
                size={{ base: "md", md: "lg" }}
              />
              <VStack align={{ base: "center", sm: "start" }} gap={0}>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.900"
                  _dark={{ color: "white" }}
                >
                  Sarah Johnson
                </Text>
                <Text
                  color="gray.600"
                  _dark={{ color: "gray.300" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Lead Designer at TechCorp
                </Text>
              </VStack>
            </Stack>
          </VStack>
        </Box>
      </Box>

      {/* Navigation Drawer */}
      <Drawer.Root
        open={isDrawerOpen}
        onOpenChange={(e) => setIsDrawerOpen(e.open)}
        placement="start"
      >
        <DrawerContent bg="white" _dark={{ bg: "gray.800" }}>
          <Drawer.Header
            borderBottomWidth="1px"
            borderColor="gray.200"
            _dark={{ borderColor: "gray.700" }}
          >
            <Drawer.Title color="gray.900" _dark={{ color: "white" }}>
              Navigation
            </Drawer.Title>
            <Drawer.CloseTrigger />
          </Drawer.Header>

          <Drawer.Body>
            <VStack gap={2} align="stretch">
              {menuItems.map((item, index) => (
                <Tooltip
                  key={index}
                  content={`Navigate to ${item.label}`}
                  showArrow
                >
                  <Button
                    variant="ghost"
                    justifyContent="start"
                    size={{ base: "md", md: "lg" }}
                    onClick={() => setIsDrawerOpen(false)}
                    w="full"
                    _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
                  >
                    <Flex justify="space-between" align="center" w="full">
                      <HStack gap={3}>
                        <Box as={item.icon} fontSize="18px" />
                        <Text color="gray.700" _dark={{ color: "gray.200" }}>
                          {item.label}
                        </Text>
                      </HStack>
                      {item.badge && (
                        <Badge
                          colorScheme={item.color}
                          variant="solid"
                          size="sm"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Flex>
                  </Button>
                </Tooltip>
              ))}
            </VStack>

            <Separator
              my={6}
              borderColor="gray.200"
              _dark={{ borderColor: "gray.700" }}
            />
            <Alert title="Pro Tip!" variant="subtle" colorScheme="blue">
              Use Cmd+K to quickly access any component in our library.
            </Alert>
          </Drawer.Body>

          <Drawer.Footer
            borderTopWidth="1px"
            borderColor="gray.200"
            _dark={{ borderColor: "gray.700" }}
          >
            <Stack direction={{ base: "column", sm: "row" }} w="full" gap={2}>
              <Button
                variant="outline"
                onClick={() => setIsDrawerOpen(false)}
                w={{ base: "full", sm: "auto" }}
                borderColor="gray.300"
                _dark={{ borderColor: "gray.600", _hover: { bg: "gray.700" } }}
              >
                Close
              </Button>
              <Tooltip content="Take a guided tour of all features" showArrow>
                <Button colorScheme="blue" w={{ base: "full", sm: "auto" }}>
                  Start Tour
                </Button>
              </Tooltip>
            </Stack>
          </Drawer.Footer>
        </DrawerContent>
      </Drawer.Root>
    </Box>
  );
};

export default HeroSection;
