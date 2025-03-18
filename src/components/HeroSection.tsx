import React from "react";
import banner from "@/banner/hero-bg.jpg";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import HeadingStrip from "./HeadingStrip";
import headingstripimage from "@/icons/heasding-img.svg";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import HeroImage from "./Hero-Image";
const HeroSection = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          minHeight: "140vh",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"}>
            <Grid2 size={6}>
              <HeadingStrip
                img={headingstripimage}
                heading="SEO MARKETING AGENCY"
                color={COLORS.PRIMARY}
              />
              <Typography
                sx={{
                  fontFamily: ROBOTO.style,
                  fontSize: 50,
                  color: COLORS.WHITE,
                  fontWeight: 550,
                }}
              >
                Boost Your Online Presence With SEO{" "}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.GREY_TEXT,
                  fontSize: 18,
                  fontFamily: ROBOTO.style,
                  lineHeight: 1.5,
                  mt: 2,
                }}
              >
                Drive More Traffic, Increase Visibility, and Boost Revenue with
                SEOX – Your Trusted SEO & Digital Marketing Partner.
              </Typography>
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.BLACK,
                  fontFamily: ROBOTO.style,
                  borderRadius: 8,
                  width: 150,
                  p: 1,
                  mt: 3,
                }}
              >
                Contact Us
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <HeroImage />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default HeroSection;
