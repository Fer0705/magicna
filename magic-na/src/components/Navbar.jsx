import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Links = [
  { name: "HOME", route: "/home" },
  { name: "GUIAS", route: "/guias" },
  { name: "TAROT", route: "/tarot" },
  { name: "BLOG", route: "/blog" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("transparent", "transparent")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Avatar
                size={"md"}
                src={
                  "https://res.cloudinary.com/dldclv2km/image/upload/v1689716110/magicna_uc3ton.jpg"
                }
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <React.Fragment key={link.name}>
                  {index > 0 && (
                    <Divider orientation="vertical" height="20px" />
                  )}
                  <ChakraLink
                    as={Link}
                    to={link.route}
                    px={2}
                    py={1}
                    color="white"
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "white",
                      color: "black",
                    }}
                    href={"#"}
                  >
                    {link.name}
                  </ChakraLink>
                </React.Fragment>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} bg={"#10002b"}>
            <Stack as={"nav"} spacing={4} align="center">
              {Links.map((link, index) => (
                <React.Fragment key={link.name}>
                  {index > 0 && <Divider orientation="horizontal" bg="black" />}
                  <ChakraLink
                    as={Link}
                    to={link.route}
                    px={4}
                    py={2}
                    rounded={"md"}
                    color="white"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    fontFamily="Shadows Into Light, cursive, sans-serif"
                    letterSpacing={1}
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={"#"}
                  >
                    {link.name}
                  </ChakraLink>
                </React.Fragment>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
