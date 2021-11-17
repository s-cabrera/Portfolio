// ======= PROJECT TITLE ======= //

//React
import React from 'react'

// Components
import ModalCard from './Modal'

//Chakra UI
import {
   Heading,
   useDisclosure,
} from "@chakra-ui/react"



const ProjectTitle = ({title, img_src, type, description, github, app}) => {
    //Modal Hooks
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
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
    </>
)
}

export default ProjectTitle;