import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { lightTheme, darkTheme } from './theme';
import Home from './components/Home';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';

import './App.css';

const App = () => {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'light' ? lightTheme : darkTheme;

  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
};

export default App;