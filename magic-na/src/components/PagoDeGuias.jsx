import { Heading, VStack, Flex, Text, Grid, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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
            <Button
              rightIcon={<ArrowForwardIcon />}
              bgColor="#000"
              color="white"
              borderRadius="8px"
              cursor="pointer"
              fontSize={"2xl"}
              padding={"6"}
              _before={{
                content: "''",
                position: "absolute",
                inset: "-4px",
                left: "-8px",
                top: "-6px",
                margin: "auto",
                width: "calc(100% + 16px)",
                height: "calc(100% + 12px)",
                borderRadius: "10px",
                background: "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)",
                zIndex: "-10",
                pointerEvents: "none",
                transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              _after={{
                content: "''",
                zIndex: "-1",
                position: "absolute",
                inset: "-8px",
                background: "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
                transform: "translate3d(0, 0, 0) scale(0.95)",
                filter: "blur(20px)",
                width: "calc(100% + 16px)",
                height: "calc(100% + 12px)",
              }}
              _hover={{
                _after: {
                  filter: "blur(30px)",
                },
                _before: {
                  transform: "rotate(-180deg)",
                },
              }}
              _active={{
                _before: {
                  scale: "0.7",
                },
              }}
            >
              LATAM
            </Button>
            <Text color={"white"} mt={3}>
              (Argentina, México, Chile, Perú, Uruguay, Colombia, Brasil)
            </Text>
          </Link>
          <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago/restodelmundo">
            <Button
              rightIcon={<ArrowForwardIcon />}
              bgColor="#000"
              color="white"
              borderRadius="8px"
              cursor="pointer"
              fontSize={"2xl"}
              padding={"6"}
              _before={{
                content: "''",
                position: "absolute",
                inset: "-4px",
                left: "-8px",
                top: "-6px",
                margin: "auto",
                width: "calc(100% + 16px)",
                height: "calc(100% + 12px)",
                borderRadius: "10px",
                background: "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)",
                zIndex: "-10",
                pointerEvents: "none",
                transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              _after={{
                content: "''",
                zIndex: "-1",
                position: "absolute",
                inset: "-8px",
                background: "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
                transform: "translate3d(0, 0, 0) scale(0.95)",
                filter: "blur(20px)",
                width: "calc(100% + 16px)",
                height: "calc(100% + 12px)",
              }}
              _hover={{
                _after: {
                  filter: "blur(30px)",
                },
                _before: {
                  transform: "rotate(-180deg)",
                },
              }}
              _active={{
                _before: {
                  scale: "0.7",
                },
              }}
            >
              Resto Del Mundo
            </Button>
            <Text color={"white"} mt={3}>
              Explora otras regiones
            </Text>
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
