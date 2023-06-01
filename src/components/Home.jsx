import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import personImage from "../assets/person-1.png";


const Home = () => {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#fff", "#071b2f");

  return (
    <Box className="container">
      <Box className="home" bg={bgColor} style={{
        backgroundImage: `url(${personImage})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 800px"
      }}>
        <Heading as="h1" className="home-title" color={textColor}>
          Bienvenido a To-Do App
        </Heading>
        <Text color={textColor}>
          ¡Comienza a organizar tus tareas de manera eficiente y sencilla!
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
