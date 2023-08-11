/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Box,
  Icon,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [pdfWidth, setPdfWidth] = useState(isMobile ? 300 : 768);
  const arrowIconSize = useBreakpointValue({ base: 6, md: 8, lg: 8 });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setPdfWidth(window.innerWidth > 768 ? 768 : window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (pageNumber === 4) {
      setShowModal(true);
    }
  }, [pageNumber]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePreviousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages));
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={2}
        bg="black"
        boxShadow="lg"
        borderRadius="lg"
        p={2}
      >
        <Icon
          as={FaArrowAltCircleLeft}
          boxSize={arrowIconSize}
          color="gray"
          cursor="pointer"
          onClick={handlePreviousPage}
          visibility={pageNumber === 1 ? "hidden" : "visible"}
          mr={4}
          _hover={{ color: "#9b5de5" }}
        />
        <Box
          w={pdfWidth}
          maxH={isMobile ? "calc(100vh - 100px)" : "none"}
          style={pageNumber === 4 ? { filter: "blur(8px)" } : null}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            renderAnnotationLayer={false}
          >
            <Page pageNumber={pageNumber} width={pdfWidth} scale={1.0} />
          </Document>
        </Box>
        <Icon
          as={FaArrowAltCircleRight}
          boxSize={arrowIconSize}
          color="gray"
          cursor="pointer"
          onClick={handleNextPage}
          visibility={pageNumber === numPages ? "hidden" : "visible"}
          ml={{ base: "2", md: "4", lg: "6" }}
          _hover={{ color: "#9b5de5" }}
        />
      </Box>
      <Modal isOpen={showModal} onClose={handleCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="xl" fontWeight="bold" color="purple.600">
            ¡Desbloquea todo el conocimiento de tu Arcano de vida!
          </ModalHeader>
          <ModalBody>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              ¡Lleva tu exploración al siguiente nivel!
            </Text>
            <Text fontSize="md" mb={4}>
              Descubre los secretos detrás de tu arcano y desbloquea su
              sabiduría para transformar tu vida:
            </Text>
            <List spacing={2} mb={4}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Profundiza en su simbolismo y significado.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Encuentra herramientas prácticas para aplicar la sabiduría de tu
                arquetipo.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Desentraña cómo influye en diferentes áreas de tu vida.
              </ListItem>
            </List>
            <Text fontSize="md">
              ¡Haz click en{" "}
              <span
                style={{
                  color: "#9b5de5",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Desbloquear la Guía Completa
              </span>{" "}
              para tu autodescubrimiento!
            </Text>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="purple"
              onClick={handleCloseModal}
              variant="ghost"
              mr={3}
            >
              Cerrar
            </Button>
            <Link to="/guias/descubretuarcano/descubretuarquetipo/formadepago">
              <Button
                colorScheme="green"
                fontWeight="bold"
                _hover={{ bgColor: "green.500" }}
              >
                ¡Desbloquear la Guía Completa!
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PdfViewer;
