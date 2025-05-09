import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "Project1",
        description: "This is a description of project 1.",
    },
    {
        title: "Project2",
        description: "This is a description of project 2.",
    },
    {
        title: "Project3",
        description: "This is a description of project 3.",
    },
    {
        title: "Project4",
        description: "This is a description of project 4.",
    },
];

const Projects = () => {
    return (
        <Box id= "projects-section"
        bg="gray.800" color="white" py={20}>
            <Heading textAlign="center" mb={10}> My Projects </Heading>
            <SimpleGrid columns={{ base: 1, md: 2}} spacing={10} px={10}>
                {projects.map ((project, idx) => (
                 
                    <Card key={idx}
                    title={project.title}
                    description={project.description} />
                ))}
                </SimpleGrid>
                </Box>
    );
};
export default Projects;