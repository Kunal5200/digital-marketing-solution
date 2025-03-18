import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import HeadingStrip from "../HeadingStrip";
import headingStrip from "@/icons/heading-black-img.svg";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import servicesImage from "@/banner/service/service-image.png";
import Image from "next/image";
import ServicesBox from "./Services-Box";
import { SERVICES_DATA } from "@/assests/Services";
const ServicesComponent = () => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <HeadingStrip
              img={headingStrip}
              heading="OUR SERVICES"
              color={COLORS.BLACK}
            />
            <Box sx={{ mt: 1 }}>
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: ROBOTO.style,
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                Results-Driven SEO & Digital Marketing Services
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontFamily: ROBOTO.style, fontWeight: 400 }}
              >
                At SEOX, we provide tailored SEO and digital marketing solutions
                designed to boost your online visibility, drive targeted
                traffic, and maximize conversions.{" "}
              </Typography>
              <Button
                sx={{
                  p: 1,
                  color: COLORS.BLACK,
                  backgroundColor: COLORS.PRIMARY,
                  borderRadius: 8,
                  fontFamily: ROBOTO.style,
                  width: 180,

                  mt: 3,
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontsize: 25,
                }}
              >
                View All services
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  img: {
                    transform: "scale(1.1)",
                  },
                },
                img: {
                  transition: "0.5s ease all",
                  borderRadius: 4,
                },
                borderRadius: 4,
              }}
            >
              <Image src={servicesImage} alt="" />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container mt={5} spacing={4}>
          {SERVICES_DATA.map((val, i) => (
            <Grid2 size={4} key={i}>
              <ServicesBox
                serial={val.serial}
                heading={val.heading}
                description={val.description}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default ServicesComponent;
