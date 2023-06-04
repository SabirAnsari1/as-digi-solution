import React from "react";
import {
  Grid,
  Box,
  IconButton,
  Text,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaStudiovinari } from "react-icons/fa";

const features = [
  {
    icon: "",
    heading: "A one-point solution",
    desc: "Ares Global Solutions is the one place where you can get electronic signatures as well as SSL certificates.",
  },
  {
    icon: "",
    heading: "Fast service",
    desc: "All the services are delivered on an urgent basis leaving the clients at absolute satisfaction.",
  },
  {
    icon: "",
    heading: "Boost your business",
    desc: "With the help of our electronic signatures and SSL certificates, you can boost and improve your business significantly.",
  },
  {
    icon: "",
    heading: "Financially beneficial",
    desc: "The services are offered at a very reasonable rate which proves beneficial to your pocket in the long run.",
  },
];

export const Features = () => {
  return (
    <Grid templateColumns={"repeat(4,1fr)"} gap={"1rem"}>
      {features?.map((el, index) => (
        <VStack
          key={index}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
          borderRadius={"5px"}
          p={"1rem"}          
        >
          <IconButton icon={<FaStudiovinari />} />
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {el.heading}
          </Text>
          <Text textAlign={"center"}>{el.desc}</Text>
        </VStack>
      ))}
    </Grid>
  );
};
