import React from "react";
import { Box, Flex, Heading, Text, IconButton, HStack, VStack, Grid } from "@chakra-ui/react";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex>
      {/* first */}
      <Box w={"50%"} p={"1rem"} textAlign={"justify"}>
        <Heading mb={"1rem"}>AS DIGI SOLUTIONS</Heading>
        <Text>
          AS DIGI SOLUTIONS was formed in July 2022 with the objectives of
          providing quality consultancy services, helping clients make major
          strategic decisions and implement improvements to business operations.
        </Text>
      </Box>

      {/* second */}
      <Grid w={"50%"} p={"1rem"} gap={"1rem"}>
        <Heading>Get in Touch</Heading>

        <HStack>
          <IconButton icon={<FaPhoneAlt />} />
          <Text>+91 8800161241</Text>
        </HStack>

        <HStack>
          <IconButton icon={<FaRegEnvelope />} />
          <Text>info@asdigisolutions.com</Text>
        </HStack>

        <Flex gap={".5rem"}>
          <IconButton icon={<FaMapMarkerAlt />} />
          <Box>
            <Text>305, Konark Avenue, Street No.05,H Block (East)</Text>
            <Text>Near Heritage School</Text>
            <Text>Aya Nagar, New Delhi -110047</Text>
          </Box>
        </Flex>
      </Grid>
    </Flex>
  );
};
