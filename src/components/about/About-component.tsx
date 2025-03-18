import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import HeadingStrip from "../HeadingStrip";
import headingStrip from "@/icons/heading-black-img.svg";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import AboutBox from "./About-box";
import bg1 from "@/banner/about/about-box-bg1.jpg";
import bg2 from "@/banner/about/about-box-bg2.jpg";
import bg3 from "@/banner/about/about-box-bg3.jpg";
const AboutComponent = () => {
  return (
    <div>
      <Container>
        <Grid2 container alignItems={"flex-end"} spacing={2}>
          <Grid2 size={4}>
            <HeadingStrip
              img={headingStrip}
              heading="About us"
              color={COLORS.BLACK}
            />
            <Typography
              sx={{
                fontSize: 50,
                fontFamily: ROBOTO.style,
                fontWeight: 550,
                lineHeight: 1.2,
                mt: 1,
              }}
            >
              The Results Speak for Themselves
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: ROBOTO.style,

                color: COLORS.TEXT_PARA,
                mt: 2,
              }}
            >
              We’re not just an SEO agency — we’re your partner in achieving
              measurable growth. With our tailored strategies and cutting-edge
              tools, we’ve built a legacy of success.
            </Typography>
            <Box sx={{ mt: 6 }}>
              <AboutBox
                img={bg1.src}
                heading="Clients Served Worldwide"
                description="Partnering with businesses across the globe to achieve outstanding results."
                value="500 +"
                height={400}
              />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <AboutBox
              img={bg2.src}
              heading="Projects Successfully Completed"
              description="Delivering customized campaigns that drive traffic and boost conversions."
              value={"700 +"}
              height={500}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box sx={{ textAlign: "end" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: 16,
                  color: COLORS.BLACK,
                  mb: 15,
                  borderRadius: 8,
                  backgroundColor: COLORS.PRIMARY,
                  fontFamily: ROBOTO.style,
                  width: 150,
                  p: 1,
                }}
              >
                Work with us
              </Button>
            </Box>
            <AboutBox
              img={bg3.src}
              heading="Revenue Generated for Clients"
              description="Partnering with businesses across the globe to achieve outstanding results."
              value={"$200M+"}
              height={600}
            />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutComponent;
