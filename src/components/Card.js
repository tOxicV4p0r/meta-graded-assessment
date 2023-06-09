import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardComp = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <Card>
            <Image
                objectFit='cover'
                src={imageSrc}
                alt={title}
                borderRadius='md'
            />
            <CardBody>
                <Stack>
                    <Heading size='md'>{title}</Heading>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Text>See more <FontAwesomeIcon icon={faArrowRight} /></Text>
            </CardFooter>
        </Card>
    );
};

export default CardComp;
