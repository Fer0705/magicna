import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  CSSReset,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const magicnaText = "MAGICNA";
  const textStyles = useStyleConfig("AnimatedText");

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column" minH="100vh">
        <Box p={2} textAlign="center">
          <Text
            color="white"
            textAlign="center"
            fontSize={{ base: "6xl", md: "9xl" }}
            fontFamily="Shadows Into Light, cursive, sans-serif"
            lineHeight="1.6"
            mt={60}
            px={8}
            sx={{
              ...textStyles,
              opacity: showText ? 1 : 0,
              transform: showText ? "scale(1)" : "scale(0.5)",
              transition: "opacity 4s, transform 4s",
            }}
          >
            {magicnaText}
          </Text>
        </Box>
        <Box mt={10} textAlign="center">
          <Link to="/home">
            <Button
              width="120px"
              height="40px"
              bgColor="#000"
              color="white"
              borderRadius="8px"
              cursor="pointer"
              _before={{
                content: "''",
                position: "absolute",
                inset: 0,
                left: "-4px",
                top: "-1px",
                margin: "auto",
                width: "128px",
                height: "48px",
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
              INGRESAR
            </Button>
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LandingPage;
