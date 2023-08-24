/* eslint-disable react/prop-types */
import {
  Heading,
  // VStack,
  // Grid,
  Box,
  // Link,
  Text,
  // HStack,
  // List,
  // ListIcon,
  // ListItem,
  // useColorModeValue,
  // Icon,
  Flex,
  // Divider,
} from "@chakra-ui/react";
// import {
//   BsFill1CircleFill,
//   BsFill2CircleFill,
//   BsFill3CircleFill,
//   BsFill4CircleFill,
//   BsFill5CircleFill,
// } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { SiMercadopago } from "react-icons/si";
// function PriceWrapper({ children }) {
//   return (
//     <Box
//       mb={4}
//       shadow="base"
//       borderWidth="1px"
//       alignSelf="center"
//       borderColor={useColorModeValue("gray.200", "gray.500")}
//       borderRadius={"xl"}
//       mt={2}
//       ml={{ base: "none", md: "30", lg: "100" }}
//     >
//       {children}
//     </Box>
//   );
// }

const MercadoPago = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
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
      <Box>
        <Text mt={50} color={"white"} align={"center"} fontSize={"2xl"}>
          Contactate a magica.natu@gmail.com{" "}
        </Text>
      </Box>
      {/* <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={1}
        justifyContent="center"
        align="center"
        mt={{ base: "1", md: "10" }}
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
                  1500
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
                  Ingresá a tu cuenta de{" "}
                  <Text
                    as="a"
                    href="https://www.mercadopago.com.ar/"
                    target="_blank"
                    color="blue.500"
                    fontWeight={"bold"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    mercado pago{" "}
                  </Text>
                  y elegí la opción{" "}
                  <Text as="i" fontWeight={"bold"}>
                    Transferir dinero
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill2CircleFill} color="green.500" />
                  Selecciona la opción{" "}
                  <Text as="i" fontWeight={"bold"}>
                    Con CBU, CVU o alias
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill3CircleFill} color="green.500" />
                  Ingresá el CVU o alias que te dejamos en la imagen y corroborá
                  que los datos sean correctos antes de transferir
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill4CircleFill} color="green.500" />
                  Ingresá el monto a transferir y presiona continuar
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFill5CircleFill} color="green.500" />
                  ¡Listo! Ahora compártenos el comprobante de pago a {""}
                  <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    magica.natu@gmail.com
                  </span>{" "}
                  <br /> junto con tu fecha de nacimiento.
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

        <Box
          flex="1"
          maxW={{ base: "100%", md: "800px" }}
          mx="auto"
          w={{ base: "100%", md: "auto" }}
          bg={useColorModeValue("gray.50", "gray.700")}
          p={4}
          borderRadius="md"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.200", "gray.500")}
          textAlign="center"
        >
          <Box mb={4}>
            <Link
              href="https://www.mercadopago.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={SiMercadopago} boxSize={60} color={"blue.500"} />
            </Link>
            <Text fontWeight={"bold"} fontSize={{ base: "xl", md: "2xl" }}>
              Titular: Natalia Mailen Trobiano
            </Text>
            <br />
            <Divider />
            <Text fontWeight={"bold"} fontSize={{ base: "xl", md: "2xl" }}>
              CUIT/CUIL: 27-35538363-1
            </Text>
            <br />
            <Divider />
            <Text fontWeight={"bold"} fontSize={{ base: "xl", md: "2xl" }}>
              CVU: 0000003100023612983273
            </Text>
            <br />
            <Divider />
            <Text fontWeight={"bold"} fontSize={{ base: "xl", md: "2xl" }}>
              Alias: magicna
            </Text>
          </Box>
        </Box>
      </Grid> */}
      <Flex direction="column" flex={1}>
        {/* Empty flex para empujar el footer hacia abajo */}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default MercadoPago;
