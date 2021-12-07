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
    Spacer
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
    FaClipboardList,
    FaBook
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
                alignContent="start"

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
                py={4}
                ms={{ base: 0, md: 2 }}
                mt={{ base: 2, md: 0 }}
                flexGrow={1}
                textAlign="start"

            >
                <Text fontSize="3xl">
                    <Icon
                        as={FaBook}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        me={2}
                        mb={1}
                        ms={4}
                    />
                    Summary
                </Text>
                <Text
                    bg={useColorModeValue("blue.100", "blue.700")}
                    borderRadius="5px"
                    fontSize="lg"
                    p={3}
                    my={2}
                    mx={4}
                >
                    Full-stack developer with a background in computer engineering from the University
                    of California, Riverside. Persistent problem-solver who embraces the challenge
                    and process of bringing innovation to fruition. Currently refining my Test Development
                    and React skills through Udemy courses.
                </Text>

                {/* SKILLS */}
                <Text fontSize="3xl">
                    <Icon
                        as={FaClipboardList}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        me={2}
                        ms={4}
                    />
                    Skills
                </Text>
                <UnorderedList
                    listStyleType="none"
                    mx={4}
                >
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
                    >
                        <Text fontWeight="bold">Etc </Text>AGILE, Project Management, Test Driven Development, Responsive Design
                    </ListItem>
                </UnorderedList>

                {/* EXPERIENCE */}
                <Text fontSize="3xl">
                    <Icon
                        as={FaBriefcase}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        ms={4}
                        me={2}
                        mb={1}
                    />
                    Experience
                </Text>
                <UnorderedList
                    listStyleType="none"
                    mx={4}
                >
                    <ListItem
                        bg={useColorModeValue("blue.100", "blue.700")}
                        borderRadius="5px"
                        p={2}
                        my={2}
                    >
                        <Flex>
                            <Text fontWeight="bold">Team Co-lead - IEEE Micromouse</Text>
                            <Spacer />
                            <Text fontWeight="light"> September 2017 - June 2019  </Text>
                        </Flex>
                        <UnorderedList
                            my={1}
                        >
                            <ListItem ms={3}>
                                Led a team of four engineers to design, build, and program a robotic mouse to solve a maze.
                            </ListItem>
                            <ListItem ms={3}>
                                Priortized individual growth and assigned tasks accordingly, documented progress,  budgeted funds, and trained new members.
                            </ListItem>
                            <ListItem ms={3}>
                                Researched and tested electrical components, manufactured printed circuit boards (PCB), and implemented a PID controller through C++ on Arduino IDE.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>

                {/* EDUCATION */}
                <Text fontSize="3xl">
                    <Icon
                        as={FaUserGraduate}
                        border="1px"
                        borderRadius={"5px"}
                        p={1}
                        ms={4}
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
                    mx={4}
                    borderRadius="5px"
                >
                    <Text
                        fontSize="xl"
                    >
                        Full Stack Development Certificate (October 2021)
                    </Text>
                    {/* <UnorderedList>
                        <ListItem>
                            Frontend: HTML, CSS, JavaScript, Handlebars, Bootstrap, React.js
                        </ListItem>
                        <ListItem>
                            Backend:
                        </ListItem>
                    </UnorderedList> */}

                </Box>
                <Box
                    bg={useColorModeValue("blue.100", "blue.700")}
                    p={2}
                    mt={2}
                    mx={4}
                    borderRadius="5px"
                >
                    <Text
                        fontSize="xl"
                    >
                        Bachelor of Science in Computer Engineering (December 2020)
                    </Text>
                    {/* <Text>The best years of my life</Text> */}
                </Box>
            </Flex>
        </Flex>

    );
}

export default Resume;
