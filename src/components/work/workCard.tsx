import { Box, Card } from "@mui/material";
import Image from "next/image";
import React from "react";

const WorkCard = () => {
  return (
    <div>
      <Card sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute" }}></Box>
      </Card>
    </div>
  );
};

export default WorkCard;
