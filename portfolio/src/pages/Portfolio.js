// React
import React from "react";

//Components
import {projects} from '../components/Projects'
import Project from "../components/Project";

//Chakra UI
import { 
    Grid, 
    // Center 
} from "@chakra-ui/react"

function Portfolio(props) {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={3} p={5}>
            { projects.map((project, i) => {
                return(
                <Project 
                    key={i} 
                    title={project.title} 
                    img_src={project.img_src} 
                    github={project.github}
                    app={project.app}
                    border="1px" />)
                } )
            }
        </Grid>
    );
}

export default Portfolio;