import {Box,Heading, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description}) => {
  
    return (
        <Box
        bg="gray-700" p={6} rounded="xl" shadow="md" _hover={{bg: "gray.600", transform: "scale(1.02)" }}
        transition="0.3s">
            <VStack align="start" spacing={3}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <FontAwesomeIcon
                icon={faArrowRight} />
            </VStack>
          </Box>
    );
};
export default Card;