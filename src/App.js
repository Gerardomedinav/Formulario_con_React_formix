import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


import Registro from './components/Registro/Registro';

const theme = extendTheme({
  // Configura los colores personalizados aquí
  colors: {
    brand: {
      blue: '#0000FF',
      teal: '#008080',
      green: '#00FF00',
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Registro />
    </ChakraProvider>
  );
};

export default App;