import { Provider } from "./components/ui/provider";
import HeroSection from "./HomePage";

function App() {
  return (
    <Provider>
      {/* <VStack gap={8} p={8}>
          <HStack>
            <Heading>Chakra UI + React</Heading>
            <ColorModeButton />
          </HStack>

          <Card.Root p={6}>
            <Card.Header>
              <Heading size="lg">Welcome to Chakra UI</Heading>
            </Card.Header>
            <Card.Body>
              <VStack gap={4}>
                <Text>Your React app now has access to all Chakra UI compositions!</Text>

                <Button onClick={() => setCount((count) => count + 1)} colorPalette="blue">
                  Count is {count}
                </Button>

                <Text fontSize="sm" color="gray.500">
                  Here are example components from our UI library:
                </Text>

                <HStack gap={4}>
                  <ButtonBasic />
                  <Button colorPalette="green">Success</Button>
                  <Button colorPalette="red">Danger</Button>
                </HStack>

                <HStack gap={4}>
                  <AvatarBasic />
                  <Text>Avatar Component</Text>
                </HStack>

                <AlertBasic />
              </VStack>
            </Card.Body>
          </Card.Root>

          <CardBasic />
        </VStack> */}
      <HeroSection />
    </Provider>
  );
}

export default App;
