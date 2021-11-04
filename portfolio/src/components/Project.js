//React
import React from "react";
import ModalCard from './Modal'

//Transitions functions
// import { showTitle } from "../utils/transitions";

//Chakra UI
import {
  Box,
  Image,
  // Badge,
  Heading,
  // Link,
  // Text,
  // Collapse,
  // Button,
  useDisclosure
} from "@chakra-ui/react"


const Project = ({ title, img_src, github, app, type, description }) => {

  //Modal Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box className="project-container">
        <Image src={img_src} alt={title} />
        <Heading 
          size="lg" 
          bg="gray.700" 
          color="white" 
          className="project-title" 
          ps={1}
          onClick={onOpen}
        >
          {title}
        </Heading>
      </Box>
      <ModalCard 
        onClose={onClose} 
        isOpen={isOpen} 
        title={title}
        img_src={img_src}
        type={type} 
        description={description} 
        github={github} 
        app={app}
        />
    </Box>
  )
}

export default Project