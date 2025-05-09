import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const socials = [
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://linkedin.com" },
  { icon: faTwitter, url: "https://twitter.com" },
];

const Header = () => {
  const headerRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;

    if (!headerElement) return;

    headerElement.style.transform =
      prevScrollPos > currentScrollPos ? "translateY(0)" : "translateY(-200px)";
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, );

  return (
    <Box
    scroll-behavior="smooth"
      as="header"
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="black"
      color="white"
      zIndex={999}
      transition="transform 0.3s ease-in-out"
    >
      <HStack justifyContent="space-between" p={4}>
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <Link key={index} href={social.url} isExternal>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
        <HStack spacing={6}>
          <Link href="#projects-section">Projects</Link>
          <Link href="#contact">Contact Me</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;