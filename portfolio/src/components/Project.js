//React
import 
  React, 
  { 
    // lazy, 
    // Suspense 
  } from 'react';

//Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//Components
import ProjectTitle from "./ProjectTitle";

// //Transitions functions
// import { showTitle, hideTitle } from "../utils/transitions";

//Chakra UI
import {
  Box,
  Spinner,
  useDisclosure,
  SlideFade,
  useColorModeValue
} from "@chakra-ui/react"

//React-device-detect for project titles
import { isMobile } from "react-device-detect";


const Project = ({ title, img_src, github, app, type, description, tech }) => {

  //Title Transition Hook
  const { isOpen, onToggle } = useDisclosure()
  // const renderLoader = () => <p>Loading</p>;

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
        onLoad={() => { if (isMobile && !isOpen) { onToggle() } }}
        onMouseOver={() => { if (!isOpen && !isMobile) { onToggle() } }}
        onMouseOut={() => { if (isOpen && !isMobile) { onToggle() } }}
      >
        {/* <Suspense fallback={renderLoader()}> */}
         <LazyLoadImage
            src={img_src}
            alt={title}
            aria-label={title}
            width={'100%'}
            height={'100%'}
            effect="blur"
            placeholder={< Spinner size="md" />}
          />
        {/* </Suspense> */}
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
            tech={tech}
          />
        </SlideFade>
      </Box>
    </Box>
  )
}


export default Project