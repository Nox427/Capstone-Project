import { Box, Avatar, Heading, VStack} from "@chakra-ui/react";

const Landing = () => {
    return (
        <Box
            id="landing-section"
            alignitems="center"
            justifycontent="center"
            display="flex"
            minheight="100vh"
            bg="gray.900"
            color="white"
            margin-top= "5px"
            margin-bottom= "5px"
            padding="20px"
        >
            <VStack spacing={6}>
                <Heading fontSize="xl" textAlign="center">
                    Hello! I am Ahmad, I code and fail and try again and again untill it works.</Heading>
                <Avatar size="2xl" name="Ahmad" src="https://i.pravatar.cc/150?img=7" />
            </VStack>
        </Box>
    );
};
export default Landing;