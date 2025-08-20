import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  VStack,
  HStack,
  Heading,
  Text,
  Grid,
  Container,
  Drawer,
  Flex,
  IconButton,
  Badge,
  Separator,
  Stack,
} from "@chakra-ui/react"
import { Tooltip } from "./ui/tooltip"
import { DrawerContent } from "./ui/drawer"
import { ColorModeButton } from "./ui/color-mode"
import { Avatar } from "./ui/avatar"
import { Alert } from "./ui/alert"
import { ProgressRoot, ProgressBar } from "./ui/progress"
import { Rating } from "./ui/rating"
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
  FiTarget
} from 'react-icons/fi'

const HeroSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', badge: '3', color: 'blue' },
    { icon: FiUser, label: 'Profile', badge: 'Pro', color: 'purple' },
    { icon: FiSettings, label: 'Settings', badge: '', color: 'gray' },
    { icon: FiHelpCircle, label: 'Help Center', badge: 'New', color: 'green' },
  ]

  const features = [
    { 
      icon: FiZap, 
      title: 'Lightning Fast', 
      description: 'Built for speed and performance',
      color: 'yellow',
      progress: 95
    },
    { 
      icon: FiShield, 
      title: 'Secure by Default', 
      description: 'Enterprise-grade security features',
      color: 'green',
      progress: 88
    },
    { 
      icon: FiGlobe, 
      title: 'Global Scale', 
      description: 'Deploy anywhere in the world',
      color: 'blue',
      progress: 92
    },
    { 
      icon: FiTarget, 
      title: 'Precision Tools', 
      description: 'Accurate analytics and insights',
      color: 'purple',
      progress: 87
    },
  ]

  return (
    <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
      {/* Navigation Header */}
      <Box bg="white" _dark={{ bg: "gray.800" }} shadow="sm" px={6} py={4}>
        <Flex justify="space-between" align="center">
          <HStack gap={4}>
            <Tooltip content="Open navigation menu" showArrow>
              <IconButton
                aria-label="Menu"
                variant="ghost"
                onClick={() => setIsDrawerOpen(true)}
              >
                <FiMenu />
              </IconButton>
            </Tooltip>
            <Heading size="lg" color="blue.600" _dark={{ color: "blue.300" }}>
              ChakraLand
            </Heading>
            <Badge colorPalette="purple" variant="solid">
              v3.0
            </Badge>
          </HStack>

          <HStack gap={2}>
            <Tooltip content="Toggle dark/light mode" showArrow>
              <ColorModeButton />
            </Tooltip>
            <Tooltip content="Your profile settings" showArrow>
              <Avatar
                name="John Doe"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                size="sm"
              />
            </Tooltip>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Container maxW="6xl" py={20}>
        <VStack gap={8} textAlign="center">
          <Tooltip content="Welcome to the future of web development!" showArrow>
            <Badge 
              colorPalette="blue" 
              variant="subtle" 
              size="lg" 
              borderRadius="full"
              px={4}
              py={2}
            >
              <FiStar style={{ marginRight: '8px' }} />
              New Release Available
            </Badge>
          </Tooltip>

          <Heading 
            size="4xl" 
            bgGradient="to-r" 
            gradientFrom="blue.400" 
            gradientTo="purple.600"
            bgClip="text"
            maxW="4xl"
          >
            Build Amazing UIs with Chakra Components
          </Heading>

          <Text 
            fontSize="xl" 
            color="gray.600" 
            _dark={{ color: "gray.300" }}
            maxW="2xl"
            lineHeight="tall"
          >
            Experience the power of our comprehensive UI library with 50+ components,
            beautiful animations, and lightning-fast performance.
          </Text>

          <HStack gap={4} pt={4}>
            <Tooltip content="Start building your dream project" showArrow>
              <Button 
                size="lg" 
                colorPalette="blue"
              >
                <FiZap style={{ marginRight: '8px' }} />
                Get Started Free
              </Button>
            </Tooltip>
            <Tooltip content="Explore live examples and demos" showArrow>
              <Button 
                size="lg" 
                variant="outline"
              >
                <FiTrendingUp style={{ marginRight: '8px' }} />
                View Demos
              </Button>
            </Tooltip>
          </HStack>
        </VStack>
      </Container>

      {/* Features Section */}
      <Container maxW="6xl" pb={20}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="2xl">Why Choose ChakraLand?</Heading>
            <Text color="gray.600" _dark={{ color: "gray.300" }} fontSize="lg">
              Discover the features that make us stand out
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} w="full">
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
                    shadow: "xl"
                  }}
                >
                  <Card.Body gap={4}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bg={`${feature.color}.100`}
                      _dark={{ bg: `${feature.color}.900` }}
                      display="inline-flex"
                      w="fit-content"
                    >
                      <Box 
                        as={feature.icon} 
                        fontSize="24px" 
                        color={`${feature.color}.600`}
                        _dark={{ color: `${feature.color}.300` }}
                      />
                    </Box>
                    
                    <VStack align="start" gap={3}>
                      <Heading size="md">{feature.title}</Heading>
                      <Text color="gray.600" _dark={{ color: "gray.300" }}>
                        {feature.description}
                      </Text>
                      <ProgressRoot 
                        value={feature.progress}
                        colorPalette={feature.color}
                        size="sm"
                        w="full"
                      >
                        <ProgressBar />
                      </ProgressRoot>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Tooltip>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Testimonial Section */}
      <Box bg="gray.100" _dark={{ bg: "gray.800" }} py={20}>
        <Container maxW="4xl">
          <VStack gap={8} textAlign="center">
            <Tooltip content="Real feedback from our amazing community" showArrow>
              <Rating value={5} colorPalette="yellow" size="lg" />
            </Tooltip>
            
            <Text fontSize="2xl" fontStyle="italic" maxW="3xl">
              "ChakraLand has completely transformed how we build user interfaces. 
              The component library is incredibly comprehensive and the developer 
              experience is just phenomenal!"
            </Text>
            
            <HStack gap={4}>
              <Avatar 
                name="Sarah Johnson"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1-75a3bae?w=100"
              />
              <VStack align="start" gap={0}>
                <Text fontWeight="bold">Sarah Johnson</Text>
                <Text color="gray.600" _dark={{ color: "gray.400" }}>
                  Lead Designer at TechCorp
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Navigation Drawer */}
      <Drawer.Root 
        open={isDrawerOpen} 
        onOpenChange={(e) => setIsDrawerOpen(e.open)}
        placement="start"
      >
        <DrawerContent>
          <Drawer.Header>
            <Drawer.Title>Navigation</Drawer.Title>
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
                    size="lg"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Flex justify="space-between" align="center" w="full">
                      <HStack>
                        <item.icon />
                        <Text>{item.label}</Text>
                      </HStack>
                      {item.badge && (
                        <Badge 
                          colorPalette={item.color} 
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

            <Separator my={6} />

            <Alert title="Pro Tip!" variant="subtle" colorPalette="blue">
              Use Cmd+K to quickly access any component in our library.
            </Alert>
          </Drawer.Body>

          <Drawer.Footer>
            <Stack direction="row" w="full">
              <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                Close
              </Button>
              <Tooltip content="Take a guided tour of all features" showArrow>
                <Button colorPalette="blue">
                  Start Tour
                </Button>
              </Tooltip>
            </Stack>
          </Drawer.Footer>
        </DrawerContent>
      </Drawer.Root>
    </Box>
  )
}

export default HeroSection