import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import HeadingStrip from "./HeadingStrip";
import headingStripImg from "@/icons/heading-black-img.svg";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import Image from "next/image";
import choose from "@/banner/service/choose-image.png";
import rocket from "@/icons/choose-shape.png";
import { data } from "@/assests/data";
import ServicesBox from "./services/Services-Box";
const Choose = () => {
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
              img={headingStripImg}
              heading="WHY CHOOSE US"
              color={COLORS.BLACK}
            />
            <Typography
              sx={{
                fontFamily: ROBOTO.style,
                fontSize: 30,
                width: 350,
                fontWeight: 700,
                mt: 2,
              }}
            >
              Why We’re the Right Choice for Your Business
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BLACK,
              width: 150,
              borderRadius: 8,
              fontFamily: ROBOTO.style,
              fontWeight: 550,
              p: 1,
            }}
          >
            Work with us
          </Button>
        </Stack>
        <Grid2 container mt={4} alignItems={"center"}>
          <Grid2 size={6}>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", left: -30 }}>
                <Image
                  src={rocket}
                  alt=""
                  className="animate__animated animate__pulse animate__infinite	infinite"
                />
              </Box>
              <Image src={choose} alt="" />
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Grid2 container spacing={3}>
              {data.choose.map((val, i) => (
                <Grid2 size={6} key={i}>
                  <ServicesBox
                    serial={val.serial}
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Choose;
