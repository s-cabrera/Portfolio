//React and Components
import React from "react";
import CollapseCard from "./Collapse";

//Chakra UI
import {
    Box,
    Flex,
    Text,
    Badge,
    Image,
    Center,
    Link,
    Spacer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useColorModeValue
} from "@chakra-ui/react"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

const ModalCard = ({ onClose, isOpen, title, img_src, type, description, github, app, tech }) => {
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <Modal initialFocusRef={initialRef}
            finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent 
                bg={useColorModeValue("gray.200", "gray.800")}                     
            >
                <ModalHeader 
                    bg={useColorModeValue("gray.300", "gray.700")}
                    borderTopRadius="5px"
                >
                    <Flex align="center">
                        <Text>{title}</Text>
                        <Spacer />
                        <Badge
                            className="project-badge"
                            borderRadius="full"
                            variant="solid"
                            colorScheme={type === "Client" ? "cyan" : "pink"}
                        >
                            {type}
                        </Badge>
                        <ModalCloseButton />
                    </Flex>
                </ModalHeader>
                <Image src={img_src} alt={title} />
                <ModalBody>
                    <CollapseCard type={type} description={description} github={github} app={app} techies={tech} />
                </ModalBody>
                <Center 
                    borderTop="1px" 
                    borderBottomRadius="5px"
                    bg={useColorModeValue("gray.300", "gray.700")}
                >
                    <ModalFooter>
                        <Box display="flex" justify="center" alignItems="center">
                            <Link href={github} p={1}>
                                <Box display="flex" alignItems="center">
                                    <Text fontSize="lg" me={1}>Github</Text>
                                    <FontAwesomeIcon icon={faGithub} />
                                </Box>
                            </Link>
                            <Link href={app} p={1}>
                                <Box display="flex" alignItems="center">
                                    <Text fontSize="lg" me={1}>App</Text>
                                    <FontAwesomeIcon icon={faReact} />
                                </Box>
                            </Link>
                        </Box>
                    </ModalFooter>
                </Center>

            </ModalContent>
        </Modal>
    )
}

export default ModalCard;