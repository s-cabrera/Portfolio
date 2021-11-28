//Imports
import React from "react";

//Chakra UI
import {
    Text,
    Img,
    Box,
    Flex,
    Link,
    List,
    UnorderedList,
    ListItem,
    ListIcon,
    Icon,
} from "@chakra-ui/react"

import {
    useColorModeValue
} from '@chakra-ui/react'

//Icons
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import {
    FaLinkedin,
    FaGithub,
    FaUserGraduate,
    FaBriefcase,
    FaClipboardList
    // FaRegKeyboard 
} from 'react-icons/fa'

//Images
import developer_photo from "../images/hiking_selfie_2.jpg";

function Resume(props) {
    return (
        <Flex
            m={2}
            align="stretch"
            wrap="wrap"
        >
            <Flex
                bg={useColorModeValue("blue.100", "blue.800")}
                w={{
                    base: '100%',
                    md: '40%',
                    lg: '30%'
                }}
                p={2}
                flexWrap={"wrap"}
                justify="center"
                // align="start"

            >
                <Text
                    fontSize={{
                        base: "4xl",
                        // sm: "2x1",
                        md: "3xl",
                        lg: "4xl"
                    }}
                    w={{
                        base: '100%'
                    }}
                    textAlign="center"
                    mb={{
                        base: 1,
                    }}
                >
                    Stephanie Cabrera
                </Text>
                <Img
                    bg={useColorModeValue("blue.50", "blue.900")}
                    src={developer_photo}
                    w={{
                        base: '95%',
                        sm: '70%',
                        md: '80%',
                        lg: '92%'
                    }}
                    alt="Developer_Photo"
                    p={2}
                    // h={"fit"}
                // m={2}
                // border="1px solid aqua"
                />
                <List
                    bg={useColorModeValue("blue.50", "blue.900")}
                    p={5}
                    m={2}
                    w={{
                        base: "95%",
                        sm: "70%",
                        md: "90%",
                        lg: "92%"
                    }}
                    text-wrap="none"
                    // border="1px"
                    fontSize={{
                        base: 'xs',
                        sm: 'md',
                        md: 'xs',
                        lg: 'md'
                    }}
                    alignSelf={{
                        base: 'none',
                        sm: 'center'
                    }}
                >
                    <ListItem
                        className="onHover"
                        onClick={() => { navigator.clipboard.writeText("(626)581-6930") }}
                    >
                        <Text> <ListIcon as={PhoneIcon} />(626) 581-6930</Text>
                    </ListItem>
                    <ListItem
                        className="onHover"
                        onClick={() => { navigator.clipboard.writeText("stephanie.cabrera.333@gmail.com") }}
                    >
                        <Text><ListIcon as={EmailIcon} />stephanie.cabrera.333@gmail.com</Text>
                    </ListItem>
                    <ListItem>

                        <Link href="https://www.linkedin.com/in/stephanie-cabrera-809999139/">
                            <ListIcon as={FaLinkedin} />
                            stephanie-cabrera-809999139
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/s-cabrera">
                            <ListIcon as={FaGithub} />
                            s-cabrera
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://docs.google.com/document/d/1NJH6z2xB7R2hKH3Lv2bGI11YP1hH4gKq3eATM1iFm5I/edit"
                            color="blue.500" rel="noreferrer" target="_blank">
                            PDF version
                        </Link>
                    </ListItem>
                </List>
            </Flex>
            <Flex
                direction="column"
                bg={useColorModeValue("gray.200", "gray.700")}
                w={{
                    base: "100%",
                    md: '35%',
                    lg: "45%"
                }}
                ps={2}
                ms={{ base: 0, md: 2 }}
                mt={{ base: 2, md: 0 }}
                flexGrow={1}
                textAlign="start"
                
            >
                <Text fontSize="3xl">
                    <Icon
                        as={FaBriefcase}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        me={2}
                        mb={1}
                    />
                    Experience
                </Text>
                <Text fontSize="3xl">
                    <Icon
                        as={FaUserGraduate}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        me={2}
                        mb={1}
                    />
                    Education
                </Text>

                <Img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/UC_Riverside_logo.svg/1024px-UC_Riverside_logo.svg.png"}
                    boxSize="45%"
                    mb={3}
                    alignSelf="center"
                    alt={"University of California, Riverside Logo"}
                // border="1px"
                />
                <Box
                    bg={useColorModeValue("blue.100", "blue.700")}
                    p={2}
                    m={2}
                    borderRadius="5px"
                >
                    <Text
                        fontSize="xl"
                        borderBottom="1px"
                        pb={1}
                    >
                        Full Stack Development Certificate (2021)
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            Frontend: HTML, CSS, JavaScript, Handlebars, Bootstrap, React.js
                        </ListItem>
                        <ListItem>
                            Backend:
                        </ListItem>
                    </UnorderedList>

                </Box>
                <Box
                    bg={useColorModeValue("blue.100", "blue.700")}
                    p={2}
                    m={2}
                    borderRadius="5px"
                >
                    <Text
                        fontSize="xl"
                        borderBottom="1px"
                        pb={1}
                    >
                        Bachelor of Science in Computer Engineering (2020)
                    </Text>
                    <Text>The best years of my life</Text>
                </Box>
                <UnorderedList
                    listStyleType="none"
                >
                    <Text fontSize="3xl">
                        <Icon
                            as={FaClipboardList}
                            border="1px"
                            borderRadius={"5px"}
                            p={1}
                            me={2}
                            mb={1}
                        />
                        Skills
                    </Text>

                    <ListItem
                        bg={useColorModeValue("blue.100", "blue.700")}
                        borderRadius="5px"
                        p={2}
                        my={2}
                    >
                        <Text fontWeight="bold">Languages </Text>Bash, C++, HTML, CSS, JavaScript, MySQL, Sequelize, Mongoose, GraphQL
                    </ListItem>

                    <ListItem
                        bg={useColorModeValue("blue.100", "blue.700")}
                        borderRadius="5px"
                        p={2}
                        mb={2}
                    >
                        <Text fontWeight="bold">Technologies </Text>Git, React.js, Node.js, Heroku, MongoDB Atlas, Bootstrap, Chakra UI
                    </ListItem>

                    <ListItem
                        bg={useColorModeValue("blue.100", "blue.700")}
                        borderRadius="5px"
                        p={2}
                        mb={2}
                    ><Text fontWeight="bold">Etc </Text>AGILE, Project Management, Test Driven Development, Responsive Design
                    </ListItem>

                </UnorderedList>
            </Flex>
        </Flex>

    );
}

export default Resume;
/*
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
</Box>*/
/*
<Image
src="https://ucrmesa.weebly.com/uploads/1/3/2/0/132087666/bourns-college-of-engineering-rgb-horz_orig.png"
boxSize="50%"
mb={3}
// border="1px"
// borderColor={useColorModeValue("gray.100", "gray.600")}
/>

Utilizing HTML, CSS, JavaScript, Handlebars, and web APIs (Bootstrap) to build interactive and responsive client-side applications.
Fetching information from Third-Party APIs to use in client-side applications.
Building databases with MySQL, Sequelize, and Node.js, implementing user validation and authentication, and practicing Test-Driven Development.

*/