import React, { useEffect } from "react";
import { Formik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const contactScheme = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("invalid email").required("Required"),
    type: Yup.string().required("Required"),
    comment: Yup.string().required("Required"),
});

const initialValuesContact = {
    firstName: '',
    email: '',
    type: '',
    comment: '',
}

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();


    const handleFormSubmit = async (values, event) => {
        console.log(values)
        // console.log(event)
        await submit('', values)
        console.log(response);
        const { type = 'error', message = '' } = response
        onOpen(type, message);
        if (type === 'success')
            event.resetForm();
    }

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <Formik
                        initialValues={initialValuesContact}
                        validationSchema={contactScheme}
                        onSubmit={handleFormSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4}>
                                    <FormControl isInvalid={Boolean(touched.firstName) && Boolean(errors.firstName)}>
                                        <FormLabel htmlFor="firstName">Name</FormLabel>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={Boolean(touched.email) && Boolean(errors.email)}>
                                        <FormLabel htmlFor="email">Email Address</FormLabel>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={Boolean(touched.type) && Boolean(errors.type)}>
                                        <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                        <Select
                                            id="type"
                                            name="type"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.type}
                                        >
                                            <option value="">Please select</option>
                                            <option value="hireMe">Freelance project proposal</option>
                                            <option value="openSource">
                                                Open source consultancy session
                                            </option>
                                            <option value="other">Other</option>
                                        </Select>
                                        <FormErrorMessage>{errors.type}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={Boolean(touched.comment) && Boolean(errors.comment)}>
                                        <FormLabel htmlFor="comment">Your message</FormLabel>
                                        <Textarea
                                            id="comment"
                                            name="comment"
                                            height={250}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.comment}
                                        />
                                        <FormErrorMessage>{errors.comment}</FormErrorMessage>
                                    </FormControl>
                                    <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default LandingSection;
