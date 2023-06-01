import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from './ToggleColorMode';
import logo from "../assets/favicon.ico";

const Menu = () => {
  const menuBgColor = useColorModeValue("#f5f5f5", "#071b2f");
  const textColor = useColorModeValue("black", "white");
  const hoverTextColor = "orange";


  return (
    <Box className="menu" bg={menuBgColor}>
      <Flex align="center" justify="space-between">
        <Box className="logo">
          <Link to="/">
            <Image src={logo} alt="Logo" style={{
              filter: `invert(${useColorModeValue(1, 0)})`,
            }} />
          </Link>
        </Box>
        <Flex as="nav">
          <ToggleColorMode />
          <Box as="ul" className="menu-list" listStyleType="none">
            <Box as="li" className="menu-item">
              <Link to="/" className="menu-link">
                <Text
                  color={textColor}
                  _hover={{ color: hoverTextColor }}
                >
                  Home
                </Text>
              </Link>
            </Box>
            <Box as="li" className="menu-item">
              <Link to="/tareas" className="menu-link">
                <Text
                  color={textColor}
                  _hover={{ color: hoverTextColor }}
                >
                  Tareas
                </Text>
              </Link>
            </Box>
            <Box as="li" className="menu-item">
              <Link to="/sobre-nosotros" className="menu-link">
                <Text
                  color={textColor}
                  _hover={{ color: hoverTextColor }}
                >
                  Sobre Nosotros
                </Text>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
