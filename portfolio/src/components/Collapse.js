//React Components

//Chakra UI
import {
  // useDisclosure,
  // Collapse,
  Box,
  Text,
  // Button,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const CollapseCard = ({ description, techies }) => {

  // const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      {/* <Collapse in={isOpen} startingHeight={50}  animateOpacity> */}
      <Box
        my={1}
        pb={2}
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        borderBottom="1px"
      >
        {description}
      </Box>
      <Box>
        <Text 
        fontWeight="semibold"
        fontSize="lg"
        >
          Technologies
        </Text>
        <UnorderedList>
          {
            techies.map((tech, i) => {
              return (
                <ListItem key={i}>
                  {tech}
                </ListItem>
              )
            })
          }
        </UnorderedList>
      </Box>
      {/* 
      </Collapse>
      <Button onClick={onToggle}>Show More</Button> */}
    </>
  )
}


export default CollapseCard