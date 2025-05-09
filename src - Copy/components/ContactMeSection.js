import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { Formik, Form, Field } from "formik";
  import * as Yup from "yup";
  
  const ContactMeSection = () => {
    const toast = useToast();
  
    // Validation schema
    const validationSchema = Yup.object({
      name: Yup.string()
        .min(2, "Name too short")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
      message: Yup.string()
        .min(10, "Message too short")
        .required("Required"),
    });
  
    const handleSubmit = (values, actions) => {
      toast({
        title: "Success!",
        description: "Information is correct.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      actions.resetForm();
    };
  
    return (
      <Box
        id="contact"
        bg="gray.900"
        color="white"
        py={20}
        px={5}
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="full" maxW="lg" bg="gray.800" p={8} rounded="xl" shadow="lg">
          <Heading textAlign="center" mb={6}>
            Contact Me
          </Heading>
  
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <VStack spacing={5}>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Name</FormLabel>
                        <Input {...field} placeholder="Your Name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
  
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel>Email</FormLabel>
                        <Input {...field} placeholder="you@example.com" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
  
                  <Field name="message">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.message && form.touched.message}>
                        <FormLabel>Message</FormLabel>
                        <Textarea {...field} placeholder="Your message..." />
                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
  
                  <Button
                    type="submit"
                    colorScheme="teal"
                    width="full"
                    isDisabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
                  </Button>
  
                  {!formik.isValid && formik.submitCount > 0 && (
                    <Text color="red.400" fontWeight="medium">
                      Info is not correct!
                    </Text>
                  )}
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  };
  
  export default ContactMeSection;