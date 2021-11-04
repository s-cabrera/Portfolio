//React
import React from 'react';

//
import './App.css'

//React Components
import PortfolioContainer from './pages/PortfolioContainer'

//Chakra UI Components
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <PortfolioContainer/>
    </ChakraProvider>
  );
}

export default App;
