//React Components

//Chakra UI
import { 
    useDisclosure,
    Collapse,
    Box,
    Button,
} from "@chakra-ui/react";

const CollapseCard = ({description}) => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
        <Collapse in={isOpen} startingHeight={33}  animateOpacity>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {description}
          </Box>
        </Collapse>
        <Button onClick={onToggle}>Show More</Button>
        </>
    )
}


export default CollapseCard