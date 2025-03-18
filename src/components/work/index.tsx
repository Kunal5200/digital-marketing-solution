import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import HeadingStrip from "../HeadingStrip";
import headingStrip from "@/icons/heading-black-img.svg";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
const WorkProcess = () => {
  return (
    <div>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <HeadingStrip
              img={headingStrip}
              heading="OUR WORK PROCESS"
              color={COLORS.BLACK}
            />
            <Typography
              sx={{
                mt: 2,
                fontFamily: ROBOTO.style,
                fontSize: 40,
                width: 500,
                fontWeight: 700,
              }}
            >
              Our Proven Process for Delivering Success
            </Typography>
          </Box>
          <Button
            sx={{
              fontSize: 17,
              fontFamily: ROBOTO.style,
              color: COLORS.BLACK,
              backgroundColor: COLORS.PRIMARY,
              width: 180,
              borderRadius: 8,
            }}
          >
            Get in touch
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default WorkProcess;
