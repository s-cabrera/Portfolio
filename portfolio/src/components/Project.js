//React
import React from "react";

//Components
import ProjectTitle from "./ProjectTitle";

// //Transitions functions
// import { showTitle, hideTitle } from "../utils/transitions";

//Chakra UI
import {
  Box,
  Image,
  // Badge,
  // Heading,
  // Link,
  // Text,
  // Collapse,
  // Button,
  useDisclosure,
  SlideFade
} from "@chakra-ui/react"



const Project = ({ title, img_src, github, app, type, description }) => {

  //Title Transition Hook
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box 
        className="project-container" 
        boxShadow="dark-lg"
        onMouseOver={() => {if(!isOpen){onToggle()}}}
        onMouseOut={() => {if(isOpen){onToggle()}}}          
        >
        <Image src={img_src} alt={title} />
        <SlideFade 
          in={isOpen} 
          className="project-title-display"
        >
          <ProjectTitle    
            title={title}
            img_src={img_src}
            type={type} 
            description={description} 
            github={github}
            app={app}
          />
        </SlideFade>
    </Box>
    </Box>
  )
}


export default Project