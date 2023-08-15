import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex, Text, Box, Image, Link, Button } from "@chakra-ui/react";
const Tarot = () => {
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
        Tarot
      </Text>
      <Box p={2} textAlign="center" bg={"blackAlpha.800"} borderRadius={"5%"}>
        <Flex
          direction={{ base: "column-reverse", md: "row-reverse" }}
          justifyContent="center"
          alignItems="center"
          mx={{ base: 2, md: 0 }}
        >
          <Box
            order={{ base: 1, md: 2 }}
            mt={{ base: 4, md: 0 }}
            flex={{ base: "1", md: "initial" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth="200px"
            maxW="50%"
          >
            <Image
              borderRadius="full"
              boxSize="200px"
              src="https://res.cloudinary.com/dldclv2km/image/upload/c_thumb,w_700,h_900,g_auto/v1691703741/photo_2023-08-10_18-41-49_mnqaid.jpg"
              alt="Natalia"
              objectFit="cover"
            />
          </Box>
          <Text
            color={"white"}
            textAlign="center"
            fontSize={{ base: "lg", lg: "md" }}
            lineHeight="1.6"
            mt={4}
            px={8}
          >
            Soy Natalia, tarotista y guía espiritual con años de experiencia en
            el mundo del tarot. Mi pasión es ayudarte a encontrar la claridad
            que necesitas para enfrentar situaciones, tomar decisiones y caminar
            con confianza hacia tu destino. Con cada pregunta que hagas, te
            brindaré interpretaciones precisas y significativas basadas en la
            energía de los arcanos. Además, tus Cafecitos apoyarán este espacio
            para que pueda seguir ofreciendo contenido y consejos útiles en
            temas de desarrollo personal, espiritualidad y crecimiento interior.{" "}
            <br />
            {""}
            <br />
            Mi formación se centra en el Tarot Evolutivo una poderosa
            herramienta que combina la antigua sabiduría del tarot con un
            enfoque contemporáneo hacia el crecimiento personal y espiritual.
            Este estilo de tarot va más allá de las predicciones simples y
            ofrece una experiencia de lectura más profunda y significativa. Su
            enfoque en la responsabilidad, la intuición y la autorreflexión lo
            convierten en una opción única para aquellos que buscan un mayor
            entendimiento de sí mismos y su camino en la vida. ¡Estoy aquí para
            ti! Atrévete a dar el primer sorbo de sabiduría, y juntos
            descubriremos el poder que el tarot puede tener en tu vida.
          </Text>
        </Flex>
        <Text color={"gray"} mt={6}>
          Cada Cafecito equivale a una pregunta
        </Text>
        <Link
          href="https://cafecito.app/magicna"
          rel="noopener noreferrer"
          target="_blank"
          display="inline-block"
          mt={10}
          _hover={{ opacity: 0.8 }}
        >
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
            alt="Invitame un café en cafecito.app"
            width="250"
            height="auto"
          />
        </Link>
        <Text color={"gray"} mt={3}>
          LATAM (Argentina, México, Chile, Perú, Uruguay, Colombia, Brasil)
        </Text>
        <br />
        <Button
          as="a"
          href="https://www.buymeacoffee.com/MagicNa"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="yellow"
          leftIcon={
            <span role="img" aria-label="Coffee">
              ☕️
            </span>
          }
          style={{ fontSize: "20px", padding: "25px 33px" }}
        >
          Buy me a coffee
        </Button>
        <Text color={"gray"} mt={3}>
          Resto del mundo
        </Text>
      </Box>
      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Tarot;
