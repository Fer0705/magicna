import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Text, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const LaEstrella = () => {
  // Array de guías
  const guias = [
    {
      id: 1,
      ruta: "/guias/descubretuarcano/laestrella/descubretuarquetipo",
      titulo: "Guía 1 - Descubre tu arquetipo",
    },
    // { id: 2, ruta: "/ruta-guia-2", titulo: "Guía 2" },
    // { id: 3, ruta: "/ruta-guia-3", titulo: "Guía 3" },
    // { id: 4, ruta: "/ruta-guia-4", titulo: "Guía 4" },
  ];

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Text
        fontSize="5xl"
        fontWeight="bold"
        mb={10}
        color="white"
        fontFamily="Shadows Into Light, cursive, sans-serif"
        textAlign={"center"}
      >
        La Estrella
      </Text>
      <Flex direction="column" alignItems="center" mb={10}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={10}
          justifyContent={"center"}
        >
          {/* Botones para mostrar las guías disponibles */}
          {guias.map((guia) => (
            <Link key={guia.id} to={guia.ruta}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bgColor="#000"
                color="white"
                borderRadius="8px"
                cursor="pointer"
                fontSize={{ base: "xl", md: "2xl" }}
                padding={{ base: "4", md: "6" }}
                _before={{
                  content: "''",
                  position: "absolute",
                  inset: "-4px", // Ajusta el tamaño del fondo del gradiente
                  left: "-8px", // Ajusta el tamaño del fondo del gradiente
                  top: "-6px", // Ajusta el tamaño del fondo del gradiente
                  margin: "auto",
                  width: "calc(100% + 16px)", // Ajusta el tamaño del fondo del gradiente
                  height: "calc(100% + 12px)", // Ajusta el tamaño del fondo del gradiente
                  borderRadius: "10px",
                  background:
                    "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)",
                  zIndex: "-10",
                  pointerEvents: "none",
                  transition:
                    "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
                _after={{
                  content: "''",
                  zIndex: "-1",
                  position: "absolute",
                  inset: "-8px", // Ajusta el tamaño del fondo del gradiente en el hover
                  background:
                    "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
                  transform: "translate3d(0, 0, 0) scale(0.95)",
                  filter: "blur(20px)",
                  width: "calc(100% + 16px)", // Ajusta el tamaño del fondo del gradiente en el hover
                  height: "calc(100% + 12px)", // Ajusta el tamaño del fondo del gradiente en el hover
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
                {guia.titulo}
              </Button>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>

      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default LaEstrella;
