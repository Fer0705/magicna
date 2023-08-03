/* eslint-disable react/prop-types */
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsFill5CircleFill,
  BsFill6CircleFill,
  BsFill7CircleFill,
  BsFill8CircleFill,
} from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const PagoDeGuias = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <VStack spacing={2} textAlign="center">
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
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={{ base: 10, md: 20, lg: 32 }}
      >
        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="3xl" color={"white"}>
                Guías
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="600" color={"white"}>
                  $
                </Text>
                <Text fontSize="6xl" fontWeight="900" color={"white"}>
                  1000
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={2} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={BsFill1CircleFill} color="green.500" />
                  Ingresa a tu cuenta de{" "}
                  <Text
                    as="a"
                    href="https://www.mercadopago.com.ar/"
                    target="_blank"
                    color="blue.500"
                    fontWeight={"bold"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    mercado pago
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill2CircleFill} color="green.500" />
                  Elegí la opción{" "}
                  <Text as="i" fontWeight={"bold"}>
                    Transferir dinero
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill3CircleFill} color="green.500" />
                  Selecciona la opción{" "}
                  <Text as="i" fontWeight={"bold"}>
                    Con CBU, CVU o alias
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill4CircleFill} color="green.500" />
                  Ingresa el CVU o alias que te dejamos en la imagen
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill5CircleFill} color="green.500" />
                  Corroborá que los datos sean correctos antes de transferir
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill6CircleFill} color="green.500" />
                  Ingresá el monto a transferir y presiona continuar
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill7CircleFill} color="green.500" />
                  Selecciona el medio de pago de tu preferencia
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill8CircleFill} color="green.500" />
                  ¡Listo! Ahora compártenos el comprobante de pago a
                  magica.natu@gmail.com <br /> junto con tu fecha de nacimiento.
                  <Text mt={3}>
                    Una vez que recibamos el comprobante y tu fecha de
                    nacimiento, te enviaremos la guía completa en breve.
                  </Text>
                  <Text>
                    ¡Gracias por confiar en nosotros para descubrir la magia de
                    tu arcano de vida!
                  </Text>
                  <Text>
                    Si tienes alguna pregunta o necesitas ayuda, no dudes en
                    contactarnos.
                  </Text>
                  <Text mt={3} textAlign={"center"} fontWeight={"bold"}>
                    ¡Que tengas un maravilloso día! 🌟
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <a
          href="https://www.mercadopago.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            flex="1" // Permite que la imagen ocupe el espacio disponible en pantallas grandes
            maxW={{ base: "100%", md: "600px" }}
            mx="auto"
            w={{ base: "100%", md: "auto" }} // Ajusta el tamaño de la imagen en pantallas medianas y grandes
          >
            <Image
              src="https://res.cloudinary.com/dldclv2km/image/upload/v1691012452/mercadopago-constancia-cvu_jbltop.png"
              alt="cvu"
              borderRadius="md"
              w="100%"
              h={{ md: "730px", lg: "590px" }}
              maxW="100%"
              maxH="800px"
            />
          </Box>
        </a>
      </Stack>
      <Footer />
    </Flex>
  );
};

export default PagoDeGuias;
