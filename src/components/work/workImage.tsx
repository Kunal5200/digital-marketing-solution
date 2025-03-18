import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import workImage1 from "@/work-process/work-image1.png";
import icon from "@/work-process/work-shape.png";
const WorkImage = () => {
  return (
    <div>
      <Box sx={{ position: "relative", zIndex: 999 }}>
        <Box sx={{ position: "absolute" }}>
          <Image src={icon} alt="" />
        </Box>
        <Image src={workImage1} alt="" />
      </Box>
    </div>
  );
};

export default WorkImage;
