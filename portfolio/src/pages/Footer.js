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
        >
            <Center>
                <HStack py={3} spacing="3">

                    <Link rel="noreferrer" target="_blank" href="https://github.com/s-cabrera/">
                        <FontAwesomeIcon size="2x" icon={faGithub} />
                    </Link>

                    <Link rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stephanie-cabrera-809999139/">
                        <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </Link>

                    <Link rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/15790246/stephanie-cabrera">
                        <FontAwesomeIcon size="2x" icon={faStackOverflow} />
                    </Link>
                </HStack>
            </Center>
        </Box>
    )
}

export default Footer;