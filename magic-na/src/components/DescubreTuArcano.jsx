import {
  Flex,
  Box,
  Text,
  Center,
  SimpleGrid,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const DescubreTuArcano = () => {
  const tarjetas = [
    {
      id: 1,
      titulo: "El Mago",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690943990/Guia_arcano_1_el_mago_wooc7g.png",
      route: "elmago",
    },
    {
      id: 2,
      titulo: "La Sacerdotisa",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944140/_Guia_arcano_2_la_sacerdotiza_bvv2dq.png",
      route: "lasacerdotisa",
    },
    {
      id: 3,
      titulo: "La Emperatriz",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944215/Guia_arcano_3_la_emperatriz_pjrkpz.png",
      route: "laemperatriz",
    },
    {
      id: 4,
      titulo: "El Emperador",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944290/Guia_arcano_4_el_emperador_kyhz1c.png",
      route: "elemperador",
    },
    {
      id: 5,
      titulo: "El Sacerdote",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944348/Guia_arcano_5_el_sacerdote_d8w5ge.png",
      route: "elsacerdote",
    },
    {
      id: 6,
      titulo: "Los Enamorados",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944410/Guia_arcano_6_los_Enamorados_ijzlgc.png",
      route: "losenamorados",
    },
    {
      id: 7,
      titulo: "El Carro",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944455/_Guia_arcano_7_El_Carro_essefm.png",
      route: "elcarro",
    },
    {
      id: 8,
      titulo: "La Fuerza",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944545/Guia_arcano_8_La_Fuerza_eqbc9x.png",
      route: "lafuerza",
    },
    {
      id: 9,
      titulo: "El Ermitaño",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944553/Guia_arcano_9_El_ermita%C3%B1o_l21a7o.png",
      route: "elermitanio",
    },
    {
      id: 10,
      titulo: "La Rueda De La Fortuna",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944594/Guia_arcano_10_La_rueda_de_la_fortuna_syguje.png",
      route: "laruedadelafortuna",
    },
    {
      id: 11,
      titulo: "La Justicia",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944603/Guia_arcano_11_La_Justicia_mq8rdp.png",
      route: "lajusticia",
    },
    {
      id: 12,
      titulo: "El Colgado",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944609/Guia_arcano_12_El_Colgado_it7ueb.png",
      route: "elcolgado",
    },
    {
      id: 13,
      titulo: "La Muerte",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944762/_Guia_arcano_13_La_Muerte_pgkutw.png",
      route: "lamuerte",
    },
    {
      id: 14,
      titulo: "La Templanza",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944760/Guia_arcano_14_la_templanza_wnpbqv.png",
      route: "latemplanza",
    },
    {
      id: 15,
      titulo: "El Diablo",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944761/Guia_arcano_15_El_diablo_jgohld.png",
      route: "eldiablo",
    },
    {
      id: 16,
      titulo: "La Torre",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944761/_Guia_arcano_16_La_Torre_ra2wwm.png",
      route: "latorre",
    },
    {
      id: 17,
      titulo: "La Estrella",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944760/_Guia_arcano_17_la_estrella_zhelfh.png",
      route: "laestrella",
    },
    {
      id: 18,
      titulo: "La Luna",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690945000/Guia_arcano_18_la_luna_cwumct.png",
      route: "laluna",
    },
    {
      id: 19,
      titulo: "El Sol",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944761/_Guia_arcano_19_el_sol_wox0vf.png",
      route: "elsol",
    },
    {
      id: 20,
      titulo: "El Juicio",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944758/_Guia_arcano_20_el_juicio_dq63zk.png",
      route: "eljuicio",
    },
    {
      id: 21,
      titulo: "El Mundo",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690944761/Guia_arcano_21_El_mundo_r1rnwp.png",
      route: "elmundo",
    },
    {
      id: 22,
      titulo: "El Loco",
      imagen:
        "https://res.cloudinary.com/dldclv2km/image/upload/v1690945031/Guia_arcano_22_el_loco_pnbudd.png",
      route: "elloco",
    },
  ];

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      p={4}
      position="relative"
      bgImage="url('https://res.cloudinary.com/dldclv2km/image/upload/v1690774512/Blue_White_One_Photo_Night_Sky_Desktop_Wallpaper_tngqv7.png')"
      bgSize="contain"
      bgPosition="center"
    >
      <Navbar />
      <Box textAlign="center" py={8}>
        <Text
          fontSize="5xl"
          fontWeight="bold"
          mb={10}
          color="white"
          fontFamily="Shadows Into Light, cursive, sans-serif"
        >
          Guías
        </Text>
        <Button
          rightIcon={<FiDownload />}
          as="a"
          href="/guiaConoceTuArcano1.pdf"
          download
          size="lg"
          fontSize={"2xl"}
          borderRadius="8px"
          cursor="pointer"
          color="white"
          fontWeight="bold"
          boxShadow="0 8px 20px rgba(0, 0, 0, 0.25)" // Agregamos una sombra para el efecto de elevación
          background="linear-gradient(-45deg, #e81cff, #40c9ff)" // Definimos el gradiente como fondo
          transition="transform 0.3s, filter 0.3s" // Agregamos transiciones para los efectos hover
          _hover={{
            transform: "translateY(-5px)", // La tarjeta se moverá hacia arriba al hacer hover
            filter: "brightness(1.2)", // Aumentamos el brillo al hacer hover
          }}
          _active={{
            transform: "scale(0.95)", // Reducimos el tamaño del botón al hacer clic
          }}
        >
          Descarga tu guía gratuita
        </Button>
      </Box>
      <Box maxW="1200px" mx="auto" flexGrow={1}>
        <Center>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            spacing={20}
          >
            {tarjetas.map((tarjeta) => (
              <Link key={tarjeta.id} to={tarjeta.route}>
                <Box
                  key={tarjeta.id}
                  position="relative"
                  width="190px"
                  height="100%" // Hacemos que la altura sea 100% para adaptarse a la imagen
                  backgroundColor="#000"
                  display="flex"
                  flexDirection="column"
                  justifyContent="end"
                  padding="12px"
                  borderRadius="8px"
                  cursor="pointer"
                  boxShadow="md"
                  transition="transform 0.3s" // Agregamos una transición para suavizar el movimiento
                  _hover={{
                    transform: "translateY(-10px)", // La tarjeta se moverá hacia arriba al hacer hover
                    "&::before": {
                      transform: "rotate(-90deg) scaleX(1.34) scaleY(0.77)",
                    },
                    "&::after": {
                      filter: "blur(30px)",
                    },
                  }}
                >
                  <AspectRatio ratio={0.5}>
                    <Box
                      bgImage={`url(${tarjeta.imagen})`}
                      bgSize="cover"
                      bgPosition="center"
                      h="100%" // Ajustamos la altura de la imagen al 100%
                      borderRadius="8px" // Ajustamos el borde para que se ajuste a la carta
                    />
                  </AspectRatio>
                  <Box>
                    <Text
                      fontSize="20px"
                      textTransform="capitalize"
                      fontWeight="700"
                      color={"white"}
                      textAlign={"center"}
                    >
                      {tarjeta.titulo}
                    </Text>
                    <Text fontSize="14px" color="#e81cff" fontWeight="600">
                      {/* Agrega aquí el contenido adicional (si lo hay) */}
                    </Text>
                  </Box>
                  <Box
                    content=""
                    position="absolute"
                    inset="0"
                    left="-5px"
                    margin="auto"
                    width="calc(100% + 10px)" // Ajustamos el tamaño del fondo del gradiente
                    height="calc(100% + 10px)" // Ajustamos el tamaño del fondo del gradiente
                    borderRadius="10px"
                    background="linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)"
                    zIndex="-10"
                    pointerEvents="none"
                    transition="all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    _hover={{
                      transform: "rotate(-90deg) scaleX(1.34) scaleY(0.77)",
                    }}
                  />
                  <Box
                    content=""
                    zIndex="-1"
                    position="absolute"
                    inset="0"
                    background="linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)"
                    transform="translate3d(0, 0, 0) scale(0.95)"
                    filter="blur(20px)"
                  />
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Center>
      </Box>
      <Footer />
    </Flex>
  );
};

export default DescubreTuArcano;
