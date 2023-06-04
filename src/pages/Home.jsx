import React from "react";
import { ImageSlider } from "../components/ImageSlider";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Features } from "../components/Features";

export const Home = () => {
  return (
    <Box p={"0 3rem"}>
      {/* first */}
      <Box p={"3rem 0"}>
        <ImageSlider />
      </Box>

      {/* second */}
      <Box p={"3rem 0"}>
        <Features />
      </Box>

      {/* last */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
