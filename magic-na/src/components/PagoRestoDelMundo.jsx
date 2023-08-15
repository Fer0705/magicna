import { Heading, VStack, Flex, Box, Text, Grid } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
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
            style={{ textDecoration: "none" }} // Opcional: quitar subrayado del enlace
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
              bg="#FFDD00"
              textAlign="center" // Centrar contenido
              transition="opacity 0.3s" // Transición suave de opacidad
              _hover={{ opacity: 0.8 }} // Cambio de opacidad al hacer hover
            >
              <Flex justifyContent="center" alignItems="center" mb={4}>
                {/* Icono de taza de café */}
                <Box
                  as="span"
                  role="img"
                  aria-label="Coffee"
                  fontSize="2xl"
                  mr={2}
                >
                  ☕️
                </Box>
                {/* Texto del botón */}
                <Text fontSize="lg" fontWeight="bold" color="#000000">
                  Buy me a coffee
                </Text>
              </Flex>
              {/* Descripción */}
              <Text fontSize="md" color="#000000">
                Elige tu guía y realiza tu pago de forma segura para acceder a
                contenido exclusivo.
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
