/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
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
        bg="black" /* Fondo gris claro */
        boxShadow="lg" /* Sombra */
        borderRadius="lg" /* Bordes redondeados */
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
          ml={4}
          _hover={{ color: "#9b5de5" }}
        />
      </Box>
      <Modal isOpen={showModal} onClose={handleCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¡Obtén la guía completa!</ModalHeader>
          <ModalBody>
            Descripción de los beneficios de la guía completa y opción para
            comprar.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button colorScheme="green">Comprar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PdfViewer;
