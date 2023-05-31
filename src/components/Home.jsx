import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box className="container">
      <Box className="home">
        <Heading as="h1" className="home-title">
          Bienvenido a To-Do App
        </Heading>
        <Text>¡Comienza a organizar tus tareas de manera eficiente y sencilla!</Text>
      </Box>
    </Box>
  );
};

export default Home;
