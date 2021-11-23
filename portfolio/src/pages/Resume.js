//Imports
import React from "react";

//Chakra UI
import {
    Text,
    Image,
    Box,
    Flex,
    Link,
    List,
    ListItem,
    ListIcon,
    Icon,
} from "@chakra-ui/react"

import {
    useColorModeValue
} from '@chakra-ui/react'

//Icons
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub, FaUserGraduate, FaBriefcase} from 'react-icons/fa'

//Images
import developer_photo from "../images/hiking_selfie_2.jpg";



function Resume(props) {
    return (
        <Flex
            direction={{
                base: 'column',
                md: 'row'
            }}
            justify={{
                base: 'center',
                md: 'start'
            }}
            align={{
                base: "center",
                md: "start"
            }}
            flexWrap="wrap"
            m={2}
        >
            <Flex
                bg={useColorModeValue("blue.200", "blue.800")}
                w={{
                    base: '80%',
                    md: '30%'
                }}
                h={"fit-content"}
                p={2}
                direction="column"
                align="center"
            // m={2}
            >
                <Text
                    fontSize="4xl"
                    ps={2}
                >
                    Stephanie Cabrera
                </Text>
                <Image
                    src={developer_photo}
                    boxSize="75%"
                    objectFit="cover"
                    alt="Developer_Photo"
                    p={2}
                    m={2}
                    bg={useColorModeValue("blue.100", "blue.900")}
                />
                <List
                    bg={useColorModeValue("blue.300", "blue.900")}
                    p={5}
                >
                    <ListItem
                        className="onHover"
                        onClick={() => { navigator.clipboard.writeText("(626)581-6930") }}
                    >
                        <Text> <ListIcon as={PhoneIcon} />(626) 581-6930</Text>
                    </ListItem>
                    <ListItem
                        className="onHover"
                        onClick={() => { navigator.clipboard.writeText("stephanie.cabrera.333@gmail.com") }}>
                        <Text>
                            <ListIcon as={EmailIcon} />
                            stephanie.cabrera.333@gmail.com
                        </Text>
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
                </List>
            </Flex>
            <Flex
                bg={useColorModeValue("gray.200", "gray.700")}
                boxSize={{
                    base: "100%",
                    md: "40%"
                }}
                ps={2}
                ms={2}
                flexGrow={1}
                justify="center"
                direction="column"
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

                <Image
                    src={"https://lh3.googleusercontent.com/proxy/ddE7spCJFELFv24PON8xr9z-tTQ06A2wrMSRbar46PCbLF-0ZDHQRG4QYbHfxO--ZReUvzhltbE14lxOm9QCJMlYDEoB2pU"}
                    boxSize="50%"
                    mb={3}
                    alignSelf="center"
                />
                <Box
                    bg={useColorModeValue("blue.200", "blue.700")}
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

                    <Text>Technologies Learned</Text>

                </Box>
                <Box
                    bg={useColorModeValue("blue.200", "blue.700")}
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
                    <Text></Text>
                </Box>



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
/> */