import React from "react";
import heromain from "@/banner/hero-main-image.png";
import heroshape1 from "@/banner/hero-image-shape1.png";
import heroShape2 from "@/banner/hero-image-shape2.png";
import { Box } from "@mui/material";
import Image from "next/image";
const HeroImage = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", right: 0 }}>
        <Image
          src={heroshape1}
          alt=""
          className="animate__animated animate__pulse animate__infinite	infinite"
        />
      </Box>
      <Box>
        <Image src={heromain} alt="" />
      </Box>
      <Box sx={{ position: "absolute", bottom: 0 }}>
        <Image
          src={heroShape2}
          alt=""
          className="animate__animated animate__pulse animate__infinite	infinite"
        />
      </Box>
    </Box>
  );
};

export default HeroImage;
