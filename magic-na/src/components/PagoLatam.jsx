import { Heading, VStack, Flex, Image, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagoLatam = () => {
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
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={12}
          justifyContent="center"
          align="center"
          mt={{ base: "1", md: "10" }}
        >
          <Link
            to="/guias/descubretuarcano/descubretuarquetipo/formadepago/cafecito" // Cambia href a to
            rel="noopener noreferrer"
            _hover={{ opacity: 0.8 }}
          >
            <Image
              src="https://res.cloudinary.com/dldclv2km/image/upload/v1691707476/cafe_rzug0w.jpg"
              alt="Cafecito"
              w="250px" // Ajusta el ancho según tu preferencia
              h="auto" // Permite que la altura se ajuste automáticamente
              cursor="pointer"
              borderRadius="30px"
              _hover={{ opacity: 0.9 }}
            />
          </Link>
          <Link
            to="/guias/descubretuarcano/descubretuarquetipo/formadepago/mercadopago" // Cambia href a to
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dldclv2km/image/upload/c_thumb,w_300,h_168,g_auto/v1691706110/mercadopago_xooinv.jpg"
              alt="Mercado Pago"
              w="250px" // Ajusta el ancho según tu preferencia
              h="auto" // Permite que la altura se ajuste automáticamente
              cursor="pointer"
              borderRadius="30px"
              _hover={{ opacity: 0.9 }}
            />
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

export default PagoLatam;
