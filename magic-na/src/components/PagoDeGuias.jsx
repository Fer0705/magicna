import { Heading, VStack, Flex, Text, Box, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagoDeGuias = () => {
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
        <Text fontSize="2xl" color="white">
          ¿Donde te encuentras?
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={12}
          justifyContent="center"
          align="center"
          mt={{ base: "1", md: "10" }}
        >
          <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago/latam">
            <Box
              p={6}
              bg={"#3c096c"}
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
              cursor="pointer"
              m={2}
              border={"1px solid white"}
              _hover={{ opacity: 0.8 }}
            >
              <Heading as="h3" fontSize="xl" color={"white"}>
                LATAM
              </Heading>
              <Text mt={2} color={"white"}>
                (Argentina, Brasil, Chile, Colombia, México, Perú, Uruguay)
              </Text>
            </Box>
          </Link>
          <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago/restodelmundo">
            <Box
              p={6}
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
              cursor="pointer"
              m={2}
              bg={"#3c096c"}
              border={"1px solid white"}
              _hover={{ opacity: 0.8 }}
            >
              <Heading as="h3" fontSize="xl" color={"white"}>
                Resto del Mundo
              </Heading>
              <Text mt={2} color={"white"}>
                Explora en otras regiones
              </Text>
            </Box>
          </Link>
        </Grid>
      </VStack>
      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default PagoDeGuias;
