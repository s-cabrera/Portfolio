//Imports
import React from "react";

import {
    Box,
    Link,
    // Heading, 
    Text,
    // List, 
    ListItem, 
    // ListIcon, 
    // OrderedList, 
    UnorderedList 
} from "@chakra-ui/react"


function Resume(props) {
    return (
        <Box h="full" p={3}>
            <Text fontSize="xl" fontWeight="semibold">Resume</Text>
            <Link href="https://docs.google.com/document/d/1NJH6z2xB7R2hKH3Lv2bGI11YP1hH4gKq3eATM1iFm5I/edit"
                color="blue.500" rel="noreferrer" target="_blank">
                Click to View Resume
            </Link>
            <Text fontSize="xl" fontWeight="semibold">Front-end Proficiencies</Text>
            <UnorderedList className="skill-list">
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JQuery</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Handlebars</ListItem>
                <ListItem>React.js</ListItem>
            </UnorderedList>
            <Text fontSize="xl" fontWeight="semibold">Back-end Proficiencies</Text>
            <UnorderedList className="skill-list" h="full">
                <ListItem>Node.js</ListItem>
                <ListItem>APIs</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>MySQL / Sequelize</ListItem>
                <ListItem>MongoDB / Mongoose</ListItem>
                <ListItem>REST</ListItem>
                <ListItem h="full">GraphQL</ListItem>
            </UnorderedList>
        </Box>
    );
}

export default Resume;