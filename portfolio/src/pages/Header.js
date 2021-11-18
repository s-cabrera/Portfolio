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
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    me={{base: 0, sm: 2}}
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
      <Box 
        bg={useColorModeValue('gray.200', 'gray.700')} 
        height="max-content" 
        py={2}
        px={{ base:0, sm:2}} 
      >
        <Flex 
          direction={{ base:"column", sm:"row" }}
          alignItems={{ base:"center", sm:"center" }} 
          justifyContent={{base:"center", sm:"space-between"}} 
          // border="1px solid red"
        >
          <Flex 
            direction={{
              base:"column", 
              sm:"row"
            }} 
            alignItems={{
              base:"center", 
              sm:"center"
            }}
            // border="1px solid aqua"
          >
            <Avatar src={avatar} me={{base:0, sm:2}}/>
            <NavLink 
                href="#about-me" 
                text="Home" 
                handlePageChange={handlePageChange} 
            />
            {/* <NavLink 
                href="#about-me" 
                text="About Me" 
                handlePageChange={handlePageChange} 
            /> */}
            <NavLink 
                href="#projects" 
                text="Projects" 
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#resume" 
                text="Resume" 
                handlePageChange={handlePageChange} 
            />
          </Flex>
          <Button onClick={toggleColorMode} h="full" m={3}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
                   
        </Flex>
      </Box>
  );
}