import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

import WorkImage from "./workImage";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
const WorkCard = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ p: 2, backgroundColor: COLORS.WHITE }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Box sx={{ position: "relative", left: -100, zIndex: 999 }}>
            <WorkImage />
          </Box>
          <Box>
            <Avatar
              sx={{ width: 20, height: 20, backgroundColor: COLORS.PRIMARY }}
            >
              <Typography
                sx={{
                  fontFamily: ROBOTO.style,
                  color: COLORS.BLACK,
                  fontSize: 14,
                  fontWeight: 550,
                }}
              >
                1
              </Typography>
            </Avatar>
            <Typography sx={{ fontFamily: ROBOTO.style, fontSize: 30 }}>
              Monitoring & Optimization
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default WorkCard;
