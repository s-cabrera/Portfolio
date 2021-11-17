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

} from "@chakra-ui/react"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

const ModalCard = ({ onClose, isOpen, title, img_src, type, description, github, app }) => {
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <Modal initialFocusRef={initialRef}
        finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Flex alignItems="center">
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
                    <CollapseCard type={type} description={description} github={github} app={app} />
                </ModalBody>
                <Center>
                    <Box display="flex" justify="center" alignItems="center">
                        <Link href={github} p={1}>
                            <Box display="flex" alignItems="center">
                                <Text me={1}>Github</Text>
                                <FontAwesomeIcon icon={faGithub} />
                            </Box>
                        </Link>
                        <Link href={app} p={1}>
                            <Box display="flex" alignItems="center">
                                <Text me={1}>App</Text>
                                <FontAwesomeIcon icon={faReact} />
                            </Box>
                        </Link>
                    </Box>
                    </Center>
            </ModalContent>
        </Modal>
    )
}

export default ModalCard;