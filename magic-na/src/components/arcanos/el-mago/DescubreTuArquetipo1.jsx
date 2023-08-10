import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import PdfViewer from "../../PdfViewer";
const DescubreTuArquetipo1 = () => {
  const pdfUrl = "/pdfs/guiaArcanoElMago1-vg.pdf";

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Text
        textAlign="center"
        fontSize={["4xl", "5xl", "6xl", "7xl"]}
        fontFamily="Shadows Into Light, cursive, sans-serif"
        fontWeight="bold"
        mt={[4, 8]}
        color={"white"}
      >
        El Mago - Descubre tu arquetipo
      </Text>

      <PdfViewer pdfUrl={pdfUrl} />

      <Box
        textAlign="center"
        mt={4}
        p={[4, 8]}
        bgGradient="linear(to-b, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Text
          fontSize={["xl", "2xl", "2xl", "2xl"]}
          fontWeight="bold"
          mb={4}
          color="purple.600"
        >
          ¡Has explorado las 3 páginas de muestra!
        </Text>
        <Text fontSize={["md", "lg", "lg", "lg"]} mb={4} color="gray.800">
          ¿Listo para sumergirte en la guía completa?
        </Text>
        <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago">
          <Button
            colorScheme="purple"
            size="lg"
            _hover={{ bgColor: "purple.700" }}
          >
            ¡Obtener la Guía Completa!
          </Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default DescubreTuArquetipo1;
