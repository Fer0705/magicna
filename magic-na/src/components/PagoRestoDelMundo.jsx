import {
  Heading,
  VStack,
  Flex,
  Box,
  Text,
  Grid,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagoRestoDelMundo = () => {
  const buyMeACoffeeUrl = "https://www.buymeacoffee.com/MagicNa/extras";
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <VStack spacing={8} textAlign="center">
        <Heading
          as="h1"
          textAlign="center"
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          fontFamily="Shadows Into Light, cursive, sans-serif"
          fontWeight="bold"
          mt={[4, 8]}
          color={"white"}
        >
          Forma de pago
        </Heading>

        <Grid
          gap={6}
          justifyContent="center"
          align="center"
          mt={{ base: "5", md: "10" }}
          m={2}
        >
          <a
            href={buyMeACoffeeUrl}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
              bg="white"
              textAlign="center"
              transition="opacity 0.3s"
              _hover={{ opacity: 0.8 }}
            >
              <Flex justifyContent="center" alignItems="center" mb={4}>
                <Box
                  as="span"
                  role="img"
                  aria-label="Coffee"
                  fontSize="4xl"
                  mr={2}
                >
                  ☕️
                </Box>
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="#000"
                  fontFamily={"'Dancing Script', cursive"}
                >
                  Buy me a coffee
                </Text>
              </Flex>
              <Divider />
              <Text fontSize="md" color="#000" as="i">
                Selecciona tu arcano de vida y realiza el pago de forma segura
                para acceder a contenido exclusivo.
              </Text>
            </Box>
          </a>
        </Grid>
      </VStack>
      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default PagoRestoDelMundo;
