import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import workImage1 from "@/work-process/work-image1.png";
const WorkImage = () => {
  return (
    <div>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute" }}>
          <Image src={workImage1} alt="" />
        </Box>
      </Box>
    </div>
  );
};

export default WorkImage;
