import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {
    const [prevScroll, setPrevScroll] = useState(0);
    const [transY, setTransY] = useState(0);

    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleScroll = () => {
        const diff = prevScroll - window.scrollY;
        if (diff > 0) {
            // console.log('up', diff, prevScroll, window.scrollY)
            setTransY(0);
        }
        else {
            // console.log('down', diff, prevScroll, window.scrollY)
            setTransY(-200);
        }

        setPrevScroll(window.scrollY)
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScroll]);


    return (
        <Box
            id="navtop"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1}
            transform="auto"
            translateY={transY}
            transitionProperty="transform"
            transitionDuration="1s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={5}>
                            {/* Add social media links based on the `socials` data */}
                            {
                                socials.map((e, i) => (
                                    <a key={e.icon + i} href={e.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={e.icon} className="fa-xl" /></a>
                                ))
                            }
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            {/* Add links to Projects and Contact me section */}
                            <a href="/#project" onClick={(e) => { e.preventDefault(); handleClick('project'); }}>Project</a>
                            <a href="/#contact-me" onClick={(e) => { e.preventDefault(); handleClick('contact-me'); }}>Contact me</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
