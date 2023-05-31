import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/favicon.ico";

const Menu = () => {
  return (
    <Box className="menu">
      <Flex align="center" justify="space-between">
        <Box className="logo">
          <Link to="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </Box>
        <Flex as="nav">
          <Box as="ul" className="menu-list" listStyleType="none">
            <Box as="li" className="menu-item">
              <Link to="/" className="menu-link">
                Home
              </Link>
            </Box>
            <Box as="li" className="menu-item">
              <Link to="/tareas" className="menu-link">
                Tareas
              </Link>
            </Box>
            <Box as="li" className="menu-item">
              <Link to="/sobre-nosotros" className="menu-link">
                Sobre Nosotros
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
