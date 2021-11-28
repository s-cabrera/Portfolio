// React
import React from "react";

//Components
import {projects} from '../components/Projects'
import Project from "../components/Project";

//Chakra UI
import { 
    Grid, 
    Flex 
} from "@chakra-ui/react"

function Portfolio(props) {
    return (
        <Flex justifyContent={"center"} py={5}>
        <Grid 
            templateColumns={{
                base:"repeat(1, 1fr)", 
                md:"repeat(2, 1fr)", 
                lg:"repeat(3, 1fr)"
            }} 
            gap={{
                base:2,
                md:3,
                lg:5
            }}
            mx={4}
        >
            { projects.map((project, i) => {
                return(
                <Project 
                    key={i} 
                    title={project.title} 
                    type={project.type}
                    img_src={project.img_src} 
                    github={project.github}
                    app={project.app}
                    description={project.description}
                />)
                } )
            }
        </Grid>
        </Flex>
    );
}

export default Portfolio;