import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import { SERVICE_BOX_PROPS } from "@/utils/types";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const ServicesBox = ({ serial, heading, description }: SERVICE_BOX_PROPS) => {
  return (
    <div>
      <Card
        sx={{
          height: 180,
          p: 3,
          backgroundColor: COLORS.WHITE,
          ":hover": {
            transform: "translateY(-10px)",
            ".number_box": {
              backgroundColor: COLORS.PRIMARY,
            },
          },
          transition: "0.5s ease all",
          borderRadius: 4,
        }}
      >
        <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
          <Box
            sx={{
              borderRadius: "100%",
              backgroundColor: COLORS.GREY_BG,
              height: 30,
              width: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.5s ease all",
            }}
            className="number_box"
          >
            <Typography
              sx={{ fontFamily: ROBOTO.style, fontSize: 16, fontWeight: 600 }}
            >
              {serial}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: ROBOTO.style,
              fontWeight: 550,
              textTransform: "capitalize",
            }}
          >
            {/* Search Engine Optimization (SEO) */}
            {heading}
          </Typography>
        </Stack>
        <Typography
          sx={{
            mt: 1.5,
            fontFamily: ROBOTO.style,
            color: COLORS.TEXT_PARA,
            textTransform: "capitalize",
          }}
        >
          {description}
        </Typography>
      </Card>
    </div>
  );
};

export default ServicesBox;
