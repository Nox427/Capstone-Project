import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import ContactMeSection from "./components/ContactMeSection";
function App() {
  return (
    <Box  id="footer-section" bg="gray.900" color="white" py={4} textAlign="center">
        <p>© 2025 Ahmad. All rights reserved.</p>
      <Header />
      <Landing />
      <Projects />
      <ContactMeSection />
      </Box>
  );
}

export default App;