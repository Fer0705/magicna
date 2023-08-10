import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import PdfViewer from "../../PdfViewer";
const DescubreTuArquetipo6 = () => {
  const pdfUrl = "/src/pdfs/guiaArcanoLosEnamorados6-vg.pdf";

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
        Los Enamorados - Descubre tu arquetipo
      </Text>
      <PdfViewer pdfUrl={pdfUrl} />

      <Box textAlign="center" mt={4} p={[4, 8]} bg="rgba(255, 255, 255, 0.8)">
        <Text fontSize={["xl", "2xl", "2xl", "2xl"]} fontWeight="bold" mb={4}>
          ¡Has leído las 3 hojas gratis!
        </Text>
        <Text fontSize={["md", "lg", "lg", "lg"]} mb={4}>
          ¿Quieres obtener la guía completa?
        </Text>
        <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago">
          <Button colorScheme="blue" size="lg">
            Comprar guía completa
          </Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default DescubreTuArquetipo6;
