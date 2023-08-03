import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex, Text } from "@chakra-ui/react";

const Tarot = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex flex={1} justify="center" align="center">
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
          Proximamente...
        </Text>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Tarot;
