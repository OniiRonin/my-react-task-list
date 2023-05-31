import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SobreNosotros = () => {
  return (
    <Box className="container">
      <Box className="about">
        <Heading as="h2" className="sobre-nosotros-title">
          Sobre Nosotros
        </Heading>
        <Text>
          Nuestra aplicación de tareas es una herramienta diseñada para ayudarte a gestionar tus actividades diarias de forma efectiva.
        </Text>
        <Text>
          Puedes agregar, completar y eliminar tareas, manteniendo un registro claro de tus responsabilidades.
        </Text>
        <Text>
          Utilizamos React, React Router y otras tecnologías modernas para desarrollar esta aplicación.
        </Text>
      </Box>
    </Box>
  );
};

export default SobreNosotros;
