//Imports
import React from "react";
// import { Nav, Navbar } from 'react-bootstrap';
import avatar from "../images/avatar.png";

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  // useDisclosure,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    me={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.href}
    onClick={()=> props.handlePageChange(props.text) }
    >   
    {props.text}
  </Link>
);

export default function Header({handlePageChange}) {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction="row" alignItems="center">
            <Avatar src={avatar} me={2}/>
            <NavLink 
                href="#about-me" 
                text="Home" 
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#about-me" 
                text="About Me" 
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#portfolio" 
                text="Portfolio" 
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#resume" 
                text="Resume" 
                handlePageChange={handlePageChange} 
            />
          </Flex>
          <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
                   
        </Flex>
      </Box>
    </>
  );
}