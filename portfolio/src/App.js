//React
import React from 'react';

//
import './App.css'

//React Components
import PortfolioContainer from './pages/PortfolioContainer'
import Footer from "./pages/Footer";

//Chakra UI Components
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider theme={theme} minHeight="vh100">
      <PortfolioContainer/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
