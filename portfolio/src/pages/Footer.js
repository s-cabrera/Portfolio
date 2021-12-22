//----Imports -----//
//React
import React from "react";

//Chakra UI
import {
    Box,
    HStack,
    Center,
    Link,
    useColorModeValue
} from "@chakra-ui/react";

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <Box
            as="footer"
            bg={useColorModeValue('gray.200', 'gray.700')}
            // sx={{ position: 'sticky', bottom: '0', }}
            h="full"
            // border="1px"
        >
            <Center>
                <HStack py={3} spacing="3">

                    <Link 
                        rel="noreferrer" 
                        target="_blank" 
                        href="https://github.com/s-cabrera/" 
                        aria-label="Github link"
                    >
                        <FontAwesomeIcon size="2x" icon={faGithub} alt="Github Icon" />
                    </Link>

                    <Link 
                        rel="noreferrer" 
                        target="_blank" 
                        href="https://www.linkedin.com/in/stephanie-cabrera-809999139/"
                        aria-label="LinkedIn link"
                    >
                        <FontAwesomeIcon size="2x" icon={faLinkedin} alt="LinkedIn Icon"/>
                    </Link>

                    <Link 
                        rel="noreferrer" 
                        target="_blank" 
                        href="https://stackoverflow.com/users/15790246/stephanie-cabrera"
                        aria-label="Stack Overflow Link"
                    >
                        <FontAwesomeIcon size="2x" icon={faStackOverflow} alt="StackOverflow Icon" />
                    </Link>
                </HStack>
            </Center>
        </Box>
    )
}

export default Footer;