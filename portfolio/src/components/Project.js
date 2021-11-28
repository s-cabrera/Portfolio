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
  useDisclosure,
  SlideFade,
  useColorModeValue
} from "@chakra-ui/react"


//React-device-detect for project titles
import { isMobile } from "react-device-detect";


const Project = ({ title, img_src, github, app, type, description }) => {

  //Title Transition Hook
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box 
      bg={useColorModeValue("gray.200", "gray.700")}
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      boxShadow="dark-lg"
      p={2}
    >
      <Box 
        className="project-container"   
        onMouseOver={() => {if(!isOpen && !isMobile){onToggle()}}}
        onMouseOut={() => {if(isOpen && !isMobile){onToggle()}}}       
        >
        {/* {(isMobile)? <div>Mobile</div> : <div>Desktop</div> } */}
        <Image src={img_src} alt={title} w={'100%'}/>
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