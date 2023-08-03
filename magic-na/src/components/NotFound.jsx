import { Link } from "react-router-dom";
import { Box, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { GiCrystalBars, GiMoonBats, GiStarsStack } from "react-icons/gi";

const NotFound = () => {
  const iconSize = useBreakpointValue({ base: 80, md: 120 });
  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl" });

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <GiCrystalBars size={iconSize} color="#9932cc" />
      <Text fontSize={fontSize} fontWeight="bold" color="white" my={6}>
        404 - Página no encontrada
      </Text>
      <GiMoonBats size={iconSize} color="#9932cc" />
      <Text fontSize={fontSize} textAlign="center" my={6} color="white">
        ¡Oh no! Parece que te has perdido en la bruma del cosmos.
      </Text>
      <Button
        as={Link}
        to="/home"
        colorScheme="purple"
        size="lg"
        mt={8}
        borderRadius="full"
        _hover={{ transform: "scale(1.05)" }}
      >
        Volver al inicio
      </Button>
      <GiStarsStack
        size={iconSize}
        color="#9932cc"
        style={{ position: "absolute", bottom: 20, right: 20 }}
      />
    </Box>
  );
};

export default NotFound;
