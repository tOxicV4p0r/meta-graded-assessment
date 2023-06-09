import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <VStack >
            <Avatar
                size='xl'
                name='Kola Tioluwani'
                src='https://i.pravatar.cc/150?img=7'
            />
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="xl"
                fontWeight="extrabold"
            >{greeting}</Text>
            <Heading size='lg'>{bio1}</Heading>
            <Heading size='lg'>{bio2}</Heading>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
