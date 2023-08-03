import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
// import { FiSend } from "react-icons/fi";

export default function SmallWithSocial() {
  const emailAddress = "magica.natu@gmail.com";
  //const telegramUsername = "tu_usuario_de_telegram";
  return (
    <Box
      bg={useColorModeValue("transparent", "transparent")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color={"gray.400"}>
          {" "}
          Copyright © 2023 . Todos los derechos reservados
        </Text>
        <Stack direction={"row"} spacing={6}>
          <chakra.a
            href="https://www.instagram.com/magic.natu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              icon={<GrInstagram />}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              rounded={"full"}
              w={8}
              h={8}
              color={"gray"}
              cursor={"pointer"}
              _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
                color: "pink",
              }}
              aria-label="Instagram"
            />
            <VisuallyHidden>Instagram</VisuallyHidden>
          </chakra.a>
          <chakra.a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              icon={<SiGmail />}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              rounded={"full"}
              w={8}
              h={8}
              color={"gray"}
              cursor={"pointer"}
              _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
                color: "green",
              }}
              aria-label="Gmail"
            />
            <VisuallyHidden>Gmail</VisuallyHidden>
          </chakra.a>
          {/* <chakra.a
            href={`https://t.me/${telegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              icon={<FiSend />} // Ícono de Telegram
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              rounded={"full"}
              w={8}
              h={8}
              cursor={"pointer"}
              _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
              }}
              aria-label="Telegram"
            />
            <VisuallyHidden>Telegram</VisuallyHidden>
          </chakra.a> */}
        </Stack>
      </Container>
    </Box>
  );
}
