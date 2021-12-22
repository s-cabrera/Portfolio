import React from "react";
import developer_photo from "../images/hiking_selfie_2_compressed.jpeg";
import {
    Stack,
    Flex,
    Text,
    Image,
} from "@chakra-ui/react"

function AboutMe(props) {
    return (
        <Flex 
            direction={{
                base:"column", 
                md:"row" 
            }} 
            alignItems={"center"} 
            p={8} 
        >
            <Image
                m={3}
                // boxSize={{
                //     base:"75%",
                //     md:"25%"
                // }}
                w={{
                    base:'75%',
                    md: '25%'
                }}
                height="fit-content"
                objectFit="cover" 
                src={developer_photo} 
                alt="Developer_Photo"
                
            />
            <Stack direction="column" p={2} h="full" >
                <Text
                    fontSize="3xl"
                    fontWeight="semibold"
                    // color="gray.700"
                    pb={1}
                    borderBottom="1px" 
                    // borderColor="gray.300"
                >
                    About Me
                </Text>
                <Text p={2}> 
                    Welcome to my portfolio. I started my journey in Web Development through my university's extension program BootCampSpot.
                    Through this program, I'm learning the basics of Web Development and applying
                    them to projects as those shown below.
                </Text>
                <Text p={2}>
                    Prior to BootCampSpot, I was an undergraduate at UC Riverside where I earned my Bachelor's of Science in Computer Engineering.
                    During my undergraduate days, I was the lead of my Micromouse team, a competition in which a team designs and programs a robotic
                    mouse to solve a maze. My responsibilities included project management, budgetting, PCB designing, and more. My hunger for
                    knowledge led me to Web Development.
                </Text>
            </Stack >
        </Flex>
    );
}

export default AboutMe;