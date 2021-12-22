//Imports
import React from "react";
import avatar from "../images/avatar_compressed.png";

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
    my={{base: 1, sm: 0}}
    textAlign="center"
    w={{base: '100%', sm:"fit-content"}}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.600'),
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
            w={{base: '50%', sm: 'fit-content'}}
          >
            <Avatar 
              src={avatar}
              size="md"
              me={{base:0, sm:2}} 
              alt="Developer Avatar icon" 
              name="Stephanie Cabrera"
              // loading="lazy"
            />
            <NavLink 
                href="#about-me" 
                text="Home" 
                aria-label="Home navbar link"
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#projects" 
                text="Projects"
                aria-label="projects navbar link"
                handlePageChange={handlePageChange} 
            />
            <NavLink 
                href="#resume" 
                text="Resume" 
                handlePageChange={handlePageChange} 
                aria-label="resume navbar link"
            />
          </Flex>
          <Button 
            onClick={toggleColorMode} 
            h="full" 
            m={3}
            aria-label="Dark/Light Theme Toggle Button"
            w={{base: '50%', sm:'fit-content'}}
            py={2}
          >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
                   
        </Flex>
      </Box>
  );
}