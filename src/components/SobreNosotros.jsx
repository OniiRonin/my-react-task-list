import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import personImage from "../assets/person-3.png";

const SobreNosotros = () => {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#fff", "#071b2f");

  return (
    <Box className="container">
      <Box className="about" bg={bgColor} style={{
        backgroundImage: `url(${personImage})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 850px"
      }}>
        <Heading as="h1" className="sobre-nosotros-title" color={textColor}>
          Sobre Nosotros
        </Heading>
        <Text color={textColor}>
          Somos un equipo comprometido en brindar soluciones de organización
          personal a través de nuestra aplicación To-Do App.
        </Text>
      </Box>
    </Box>
  );
};

export default SobreNosotros;
