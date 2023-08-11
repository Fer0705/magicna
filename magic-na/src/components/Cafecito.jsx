import { Heading, VStack, Flex, Link, Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cafecito = () => {
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
      </VStack>
      <Box
        p={4}
        textAlign="center"
        bg={"blackAlpha.800"}
        borderRadius={"5%"}
        mt={{ base: "5", md: "10" }}
      >
        <Flex
          direction={{ base: "column-reverse", md: "row-reverse" }}
          justifyContent="center"
          alignItems="center"
          mx={{ base: 2, md: 0 }}
        >
          <Text color="white" fontSize={"xl"}>
            ¡Hola! Si te encuentras aquí, estás a punto de embarcarte en un
            emocionante viaje hacia el fascinante mundo del tarot y la magia
            interior. Al hacer click en el botón{" "}
            <span
              style={{
                color: "#9b5de5",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Invítame un cafecito
            </span>
            , tendrás la maravillosa oportunidad de apoyarme adquiriendo 5
            cafecitos, un gesto lleno de energía positiva que te abrirá las
            puertas a la guía completa de tu arcano de vida. Pero eso no es
            todo, después de tu generosa invitación, te pido que me dejes tu
            correo electrónico. De esta manera, te haré llegar directamente a tu
            bandeja de entrada toda la riqueza y sabiduría contenida en esta
            guía. En sus páginas, descubrirás secretos y consejos profundamente
            enraizados en el tarot, desbloqueando un portal de conocimiento que
            te empoderará en tu camino espiritual. ¿Te sientes listo para
            disfrutar de un café mágico? Simplemente haz click en{" "}
            <span
              style={{
                color: "#9b5de5",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Invítame un cafecito
            </span>{" "}
            y prepárate para sumergirte en la asombrosa magia que el tarot tiene
            para ofrecer. Te espero en el otro lado, dispuesta a compartir
            contigo un café lleno de conocimiento y transformación. ☕🔮
          </Text>
        </Flex>
        <Link
          href="https://cafecito.app/magicna"
          rel="noopener noreferrer"
          target="_blank"
          display="inline-block"
          mt={10}
        >
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
            alt="Invitame un café en cafecito.app"
            width="250"
            height="auto"
          />
        </Link>
        <Text color={"gray"}>
          Debes comprar mínimo 5 cafecitos para adquerir la guía completa
        </Text>
      </Box>
      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Cafecito;
