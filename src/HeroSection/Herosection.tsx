// Homepage.tsx
"use client"

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Container,
  Grid,

  SimpleGrid,
  AspectRatio,
  Icon,
  Badge,

} from "@chakra-ui/react"
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
} from "../components/ui/popover"
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "../components/ui/accordion"
import {
  BreadcrumbRoot,
  BreadcrumbLink,
  BreadcrumbCurrentLink,
} from "../components/ui/breadcrumb"
import { motion } from "framer-motion"
import { 
  FiTrendingUp, 
  FiShield, 
  FiUsers, 
  FiTarget,
  FiPlay,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi"

// Motion wrappers
const MotionBox = motion(Box)
// const MotionHeading = motion(Heading)
const MotionText = motion(Text)
// const MotionButton = motion(Button)

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    },
    viewport: { once: true }
  }

  return (
    <Box bg="white" color="gray.800">
      {/* Breadcrumb Navigation */}
      <Container maxW="7xl" pt="6">
        <BreadcrumbRoot separator="/" separatorGap="2">
          <BreadcrumbLink href="/" fontSize="sm" color="gray.500" _hover={{ color: "blue.600" }}>
            Home
          </BreadcrumbLink>
          <BreadcrumbCurrentLink fontSize="sm" color="blue.600" fontWeight="500">
            Financial Services
          </BreadcrumbCurrentLink>
        </BreadcrumbRoot>
      </Container>

      {/* Hero Section */}
      <Box as="section" position="relative" minH="100vh" bg="gray.50">
        {/* Background Pattern */}
        <Box
          position="absolute"
          inset="0"
          opacity="0.05"
          backgroundImage="radial-gradient(circle at 25px 25px, gray.300 2px, transparent 0)"
          backgroundSize="50px 50px"
        />

        {/* Content Container */}
        <Container maxW="7xl" position="relative" zIndex="1">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="12" alignItems="center" minH="100vh" py="20">
            
            {/* Left Content */}
            <VStack align="start" gap="8">
              <MotionBox {...fadeInUp}>
                <Badge colorScheme="blue" px="3" py="1" borderRadius="full" fontSize="sm" mb="4">
                  Trusted by 50,000+ Users
                </Badge>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="300"
                  lineHeight="1.1"
                  gap="-0.02em"
                  color="gray.900"
                >
                  Empower Your{" "}
                  <Text as="span" fontWeight="600" color="blue.600" position="relative">
                    Financial Future
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      h="3px"
                      bg="blue.200"
                      borderRadius="full"
                    />
                  </Text>
                </Heading>
              </MotionBox>

              <MotionText
                fontSize="xl"
                color="gray.600"
                maxW="500px"
                lineHeight="1.6"
                {...fadeInUp}
              >
                Transform your financial journey with intelligent investment tools, 
                streamlined loan management, and personalized wealth-building strategies.
              </MotionText>

              <MotionBox {...fadeInUp}>
                <HStack gap="4">
                  <Button
                    size="lg"
                    bg="blue.600"
                    color="white"
                    px="8"
                    py="6"
                    borderRadius="xl"
                    fontSize="md"
                    fontWeight="500"
                   
                    _hover={{
                      bg: "blue.700",
                      transform: "translateY(-2px)",
                      shadow: "xl"
                    }}
                    transition="all 0.3s ease"
                  >
                    Start Your Journey
                    <Icon as={FiArrowRight} ml="2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="gray.300"
                    color="gray.700"
                    px="8"
                    py="6"
                    borderRadius="xl"
                    fontSize="md"
                    fontWeight="500"
                    _hover={{
                      bg: "gray.50",
                      transform: "translateY(-2px)",
                      shadow: "lg"
                    }}
                    transition="all 0.3s ease"
                  >
                    Watch Demo
                  </Button>
                </HStack>
              </MotionBox>

              {/* Stats */}
              <MotionBox {...fadeInUp}>
                <HStack gap="8" pt="4">
                  <VStack gap="1" align="start">
                    <Text fontSize="2xl" fontWeight="600" color="blue.600">$2.5B+</Text>
                    <Text fontSize="sm" color="gray.500">Assets Managed</Text>
                  </VStack>
                  <VStack gap="1" align="start">
                    <Text fontSize="2xl" fontWeight="600" color="blue.600">98%</Text>
                    <Text fontSize="sm" color="gray.500">Client Satisfaction</Text>
                  </VStack>
                  <VStack gap="1" align="start">
                    <Text fontSize="2xl" fontWeight="600" color="blue.600">15+</Text>
                    <Text fontSize="sm" color="gray.500">Years Experience</Text>
                  </VStack>
                </HStack>
              </MotionBox>
            </VStack>

            {/* Right Content - Hero Image */}
            <MotionBox {...fadeInUp}>
              <AspectRatio ratio={4/3}>
                <Image
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                  alt="Financial dashboard"
                  borderRadius="2xl"
                  objectFit="cover"
                  shadow="2xl"
                />
              </AspectRatio>
            </MotionBox>
          </Grid>
        </Container>

        {/* Enhanced Tip Popovers */}
        <Box position="absolute" top="8" right="8">
          <PopoverRoot>
            <PopoverTrigger>
              <Button
                size="sm"
                bg="white"
                color="blue.600"
                shadow="lg"
                borderRadius="full"
                px="4"
                py="2"
                fontSize="sm"
                fontWeight="500"
                border="1px solid"
                borderColor="blue.100"

                _hover={{
                  bg: "blue.50",
                  transform: "translateY(-2px)",
                  shadow: "xl"
                }}
                transition="all 0.3s ease"
              >
                <Icon as={FiTrendingUp} mr="2" />
                Pro Tip
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="white" border="1px solid" borderColor="gray.200" shadow="xl" borderRadius="xl">
              <PopoverArrow />
              <PopoverCloseTrigger />
              <PopoverBody p="4">
                <VStack align="start" gap="2">
                  <Icon as={FiTarget} color="blue.500" />
                  <Text fontSize="sm" fontWeight="500">Smart Investment Strategy</Text>
                  <Text fontSize="xs" color="gray.600">
                    Diversify your portfolio with our AI-powered recommendations for optimal returns.
                  </Text>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </Box>

        <Box position="absolute" bottom="8" left="8">
          <PopoverRoot>
            <PopoverTrigger>
              <Button
                size="sm"
                bg="white"
                color="green.600"
                shadow="lg"
                borderRadius="full"
                px="4"
                py="2"
                fontSize="sm"
                fontWeight="500"
                border="1px solid"
                borderColor="green.100"

                _hover={{
                  bg: "green.50",
                  transform: "translateY(-2px)",
                  shadow: "xl"
                }}
                transition="all 0.3s ease"
              >
                <Icon as={FiCheckCircle} mr="2" />
                Success Story
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="white" border="1px solid" borderColor="gray.200" shadow="xl" borderRadius="xl">
              <PopoverArrow />
              <PopoverCloseTrigger />
              <PopoverBody p="4">
                <VStack align="start" gap="2">
                  <Icon as={FiUsers} color="green.500" />
                  <Text fontSize="sm" fontWeight="500">Client Achievement</Text>
                  <Text fontSize="xs" color="gray.600">
                    Sarah increased her savings by 85% in just 6 months using our platform.
                  </Text>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </Box>
      </Box>

      {/* Features Section */}
      <Box as="section" py="20" bg="white">
        <Container maxW="7xl">
          <MotionBox {...fadeInUp} textAlign="center" mb="16">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="300"
              color="gray.900"
              mb="4"
              gap="-0.02em"
            >
              Why Choose Our Platform
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              Experience the perfect blend of technology and financial expertise
            </Text>
          </MotionBox>

          <MotionBox {...staggerChildren}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
              {[
                {
                  icon: FiTrendingUp,
                  title: "Smart Investing",
                  description: "AI-powered portfolio optimization with real-time market analysis and personalized recommendations."
                },
                {
                  icon: FiShield,
                  title: "Secure & Trusted",
                  description: "Bank-level security with 256-bit encryption and regulatory compliance across all platforms."
                },
                {
                  icon: FiUsers,
                  title: "Expert Support",
                  description: "24/7 access to certified financial advisors and dedicated customer success managers."
                }
              ].map((feature, index) => (
                <Box
                  key={index}
                  as={motion.div}
                  {...fadeInUp}
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="xl"
                  p="8"
                  _hover={{
                    shadow: "xl",
                    transform: "translateY(-5px)",
                    bg: "white"
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack align="start" gap="4">
                      <Box
                        p="3"
                        bg="blue.100"
                        borderRadius="lg"
                        color="blue.600"
                      >
                        <Icon as={feature.icon} boxSize="6" />
                      </Box>
                      <Heading as="h3" fontSize="xl" fontWeight="500" color="gray.900">
                        {feature.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.6">
                        {feature.description}
                      </Text>
                    </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* Video & Media Section */}
      <Box as="section" py="20" bg="gray.50">
        <Container maxW="7xl">
          <MotionBox {...fadeInUp} textAlign="center" mb="16">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="300"
              color="gray.900"
              mb="4"
              gap="-0.02em"
            >
              See Our Platform in Action
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              Discover how our tools can transform your financial journey
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap="8">
            {/* Main Video */}
            <MotionBox {...fadeInUp}>
              <AspectRatio ratio={16/9}>
                <Box
                  bg="gray.200"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.02)" }}
                  transition="transform 0.3s ease"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Platform demo"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                  <Box
                    position="absolute"
                    inset="0"
                    bg="blackAlpha.400"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      size="lg"
                      borderRadius="full"
                      bg="whiteAlpha.900"
                      color="blue.600"
                     
                      _hover={{ bg: "white" }}
                    >
                           <Icon as={FiPlay} mr="2" />
                      Watch Demo
                    </Button>
                  </Box>
                </Box>
              </AspectRatio>
            </MotionBox>

            {/* Side Gallery */}
            {/* <VStack gap="4">
              {[
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80"
              ].map((src, index) => (
                <MotionBox key={index} {...fadeInUp} w="100%">
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={src}
                      alt={`Feature ${index + 1}`}
                      borderRadius="lg"
                      objectFit="cover"
                      cursor="pointer"
                      _hover={{ transform: "scale(1.05)" }}
                      transition="transform 0.3s ease"
                    />
                  </AspectRatio>
                </MotionBox>
              ))}
            </VStack> */}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Accordion Section */}
      <Box as="section" py="20" bg="white">
        <Container maxW="4xl">
          <MotionBox {...fadeInUp} textAlign="center" mb="16">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="300"
              color="gray.900"
              mb="4"
              gap="-0.02em"
            >
              Frequently Asked Questions
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Everything you need to know about our financial platform
            </Text>
          </MotionBox>

          <MotionBox {...fadeInUp}>
            <AccordionRoot multiple defaultValue={["getting-started"]}>
              {/* Layer 1: Getting Started */}
              <AccordionItem value="getting-started" bg="gray.50" borderRadius="xl" mb="4" border="none">
                <AccordionItemTrigger py="6" px="6" _hover={{ bg: "gray.100" }} borderRadius="xl">
                  <VStack align="start" gap="1">
                    <Text fontSize="lg" fontWeight="500" color="gray.900">
                      Getting Started
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Basic setup and account information
                    </Text>
                  </VStack>
                </AccordionItemTrigger>
                <AccordionItemContent px="6" pb="6">
                  <AccordionRoot>
                    <AccordionItem value="create-account" border="none" borderBottom="1px solid" borderColor="gray.200">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        How do I create an account?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <Text color="gray.600" lineHeight="1.6">
                          Creating an account is simple. Click "Get Started" and provide your basic information. 
                          We'll verify your identity through secure bank-level authentication, and you'll be 
                          ready to start investing within minutes.
                        </Text>
                      </AccordionItemContent>
                    </AccordionItem>
                    
                    <AccordionItem value="minimum-deposit" border="none" borderBottom="1px solid" borderColor="gray.200">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        What's the minimum deposit required?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <AccordionRoot>
                          <AccordionItem value="investment-accounts" border="none" borderBottom="1px solid" borderColor="gray.100">
                            <AccordionItemTrigger py="3" fontSize="sm" fontWeight="500" color="gray.700">
                              Investment Accounts
                            </AccordionItemTrigger>
                            <AccordionItemContent pb="3">
                              <Text fontSize="sm" color="gray.600">
                                Standard accounts require a minimum deposit of $100. Premium accounts start at $10,000 
                                and include additional features like priority support and advanced analytics.
                              </Text>
                            </AccordionItemContent>
                          </AccordionItem>
                          <AccordionItem value="savings-accounts" border="none">
                            <AccordionItemTrigger py="3" fontSize="sm" fontWeight="500" color="gray.700">
                              High-Yield Savings
                            </AccordionItemTrigger>
                            <AccordionItemContent pb="3">
                              <Text fontSize="sm" color="gray.600">
                                Our high-yield savings accounts have no minimum deposit requirement. Start saving 
                                with any amount and earn competitive interest rates from day one.
                              </Text>
                            </AccordionItemContent>
                          </AccordionItem>
                        </AccordionRoot>
                      </AccordionItemContent>
                    </AccordionItem>

                    <AccordionItem value="verification-time" border="none">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        How long does account verification take?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <Text color="gray.600" lineHeight="1.6">
                          Most accounts are verified instantly through our automated system. In some cases, 
                          manual review may be required, which typically takes 1-2 business days.
                        </Text>
                      </AccordionItemContent>
                    </AccordionItem>
                  </AccordionRoot>
                </AccordionItemContent>
              </AccordionItem>

              {/* Layer 1: Security & Safety */}
              <AccordionItem value="security" bg="gray.50" borderRadius="xl" mb="4" border="none">
                <AccordionItemTrigger py="6" px="6" _hover={{ bg: "gray.100" }} borderRadius="xl">
                  <VStack align="start" gap="1">
                    <Text fontSize="lg" fontWeight="500" color="gray.900">
                      Security & Safety
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      How we protect your investments and data
                    </Text>
                  </VStack>
                </AccordionItemTrigger>
                <AccordionItemContent px="6" pb="6">
                  <AccordionRoot>
                    <AccordionItem value="data-protection" border="none" borderBottom="1px solid" borderColor="gray.200">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        How is my data protected?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <Text color="gray.600" lineHeight="1.6">
                          We use bank-level 256-bit SSL encryption for all data transmission. Your personal information 
                          is stored in secure, FDIC-insured institutions and we never sell your data to third parties.
                        </Text>
                      </AccordionItemContent>
                    </AccordionItem>
                    
                    <AccordionItem value="insurance" border="none">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        Are my investments insured?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <Text color="gray.600" lineHeight="1.6">
                          Your cash deposits are FDIC-insured up to $250,000. Securities are protected by SIPC insurance 
                          up to $500,000, including $250,000 in cash coverage for investment accounts.
                        </Text>
                      </AccordionItemContent>
                    </AccordionItem>
                  </AccordionRoot>
                </AccordionItemContent>
              </AccordionItem>

              {/* Layer 1: Fees & Pricing */}
              <AccordionItem value="pricing" bg="gray.50" borderRadius="xl" border="none">
                <AccordionItemTrigger py="6" px="6" _hover={{ bg: "gray.100" }} borderRadius="xl">
                  <VStack align="start" gap="1">
                    <Text fontSize="lg" fontWeight="500" color="gray.900">
                      Fees & Pricing
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Transparent pricing structure
                    </Text>
                  </VStack>
                </AccordionItemTrigger>
                <AccordionItemContent px="6" pb="6">
                  <AccordionRoot>
                    <AccordionItem value="management-fees" border="none" borderBottom="1px solid" borderColor="gray.200">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        What are the management fees?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <AccordionRoot>
                          <AccordionItem value="standard-fees" border="none" borderBottom="1px solid" borderColor="gray.100">
                            <AccordionItemTrigger py="3" fontSize="sm" fontWeight="500" color="gray.700">
                              Standard Portfolio Management
                            </AccordionItemTrigger>
                            <AccordionItemContent pb="3">
                              <Text fontSize="sm" color="gray.600">
                                0.25% annual fee on portfolios under $100,000. This includes automatic rebalancing, 
                                tax-loss harvesting, and access to our mobile app.
                              </Text>
                            </AccordionItemContent>
                          </AccordionItem>
                          <AccordionItem value="premium-fees" border="none">
                            <AccordionItemTrigger py="3" fontSize="sm" fontWeight="500" color="gray.700">
                              Premium Services
                            </AccordionItemTrigger>
                            <AccordionItemContent pb="3">
                              <Text fontSize="sm" color="gray.600">
                                0.40% annual fee for portfolios over $100,000. Includes dedicated advisor access, 
                                advanced tax strategies, and priority customer support.
                              </Text>
                            </AccordionItemContent>
                          </AccordionItem>
                        </AccordionRoot>
                      </AccordionItemContent>
                    </AccordionItem>

                    <AccordionItem value="hidden-fees" border="none">
                      <AccordionItemTrigger py="4" fontSize="md" fontWeight="500">
                        Are there any hidden fees?
                      </AccordionItemTrigger>
                      <AccordionItemContent pb="4">
                        <Text color="gray.600" lineHeight="1.6">
                          No hidden fees, ever. We believe in complete transparency. The only costs are our clearly 
                          stated management fees and the underlying expense ratios of ETFs, which average 0.07%.
                        </Text>
                      </AccordionItemContent>
                    </AccordionItem>
                  </AccordionRoot>
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
          </MotionBox>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box as="section" py="20" bg="blue.600" color="white">
        <Container maxW="4xl" textAlign="center">
          <MotionBox {...fadeInUp}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="300"
              mb="4"
              gap="-0.02em"
            >
              Ready to Transform Your Financial Future?
            </Heading>
            <Text fontSize="lg" mb="8" opacity="0.9">
              Join thousands of investors who trust us with their financial growth
            </Text>
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              px="8"
              py="6"
              borderRadius="xl"
              fontSize="md"
              fontWeight="500"
              _hover={{
                transform: "translateY(-2px)",
                shadow: "xl"
              }}
              transition="all 0.3s ease"
            >
              Start Investing Today
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}