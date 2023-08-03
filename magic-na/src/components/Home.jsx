import { Link } from "react-router-dom";
import { Box, Flex, Text, Grid, Button } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const cardData = [
    {
      id: 1,
      title: "Guías",
      description: "Descripción de la tarjeta 1",
      image:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690505725/fondo-universo_495832-909_hprapz.jpg", // Reemplaza con la URL de la imagen
      route: "/guias",
      bgColor: "blue.500", // Puedes cambiar el color de fondo aquí
    },
    {
      id: 2,
      title: "Tarot",
      description: "Descripción de la tarjeta 2",
      image:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690505781/fondo-espacio_128650-2107_tiaamd.jpg", // Reemplaza con la URL de la imagen
      route: "/tarot",
      bgColor: "blue.500", // Puedes cambiar el color de fondo aquí
    },
    {
      id: 3,
      title: "Blog",
      description: "Descripción de la tarjeta 3",
      image:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690505822/fondo-pantalla-nebulosa-galaxia-universo-colorido-como-concepto-espacio-exterior_786587-2625_xahkku.jpg", // Reemplaza con la URL de la imagen
      route: "/blog",
      bgColor: "blue.500", // Puedes cambiar el color de fondo aquí
    },
  ];

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Text
        textAlign="center"
        fontSize="7xl"
        fontFamily="Shadows Into Light, cursive, sans-serif"
        fontWeight="bold"
        mb={4}
        color={"white"}
      >
        Bienvenido a MagicNa
      </Text>
      <Box p={2} textAlign="center" bg={"blackAlpha.800"} borderRadius={"5%"}>
        <Text
          color={"white"}
          textAlign="center"
          fontSize={{ base: "xl", lg: "lg" }}
          lineHeight="1.6"
          mt={4}
          px={8}
        >
          ¡Bienvenidos a nuestra Tienda Mágica Virtual de Tarot y Astrología!
          Aquí encontrarás un universo lleno de conocimiento ancestral, magia y
          autoconocimiento. Te invitamos a adentrarte en el fascinante mundo del
          tarot y la astrología, donde podrás descubrir las respuestas que
          buscas, conectar con tu intuición y explorar los misterios del cosmos.
          Ya seas un entusiasta del tarot y la astrología o estés comenzando tu
          viaje en este mundo espiritual, nuestra Tienda Mágica Virtual es tu
          destino para encontrar herramientas, conocimientos y orientación para
          iluminar tu camino y despertar el poder que yace en tu interior.
          ¡Bienvenidos a una experiencia mística y transformadora que te ayudará
          a desplegar todo tu potencial!
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(3, 1fr)", md: "1fr" }}
        gap={{ base: "2", md: "20" }}
        p={4}
        maxW="1200px"
        mx="auto"
        flexGrow={1}
      >
        {cardData.map((card) => (
          <Link key={card.id} to={card.route}>
            <Button
              position="relative"
              width="150px"
              height="90px"
              bgColor="#000"
              display="flex"
              alignItems="center"
              color="white"
              flexDirection="column"
              justifyContent="center"
              border="none"
              fontSize={"3xl"}
              padding="19px"
              gap="12px"
              mt={20}
              borderRadius="8px"
              cursor="pointer"
              _before={{
                content: "''",
                position: "absolute",
                inset: 0,
                left: "-4px",
                top: "-1px",
                margin: "auto",
                width: "158px",
                height: "98px",
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
                inset: 0,
                background: "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
                transform: "translate3d(0, 0, 0) scale(0.95)",
                filter: "blur(20px)",
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
              {card.title}
            </Button>
          </Link>
        ))}
      </Grid>
      <Footer />
    </Flex>
  );
};

export default Home;
