import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo from "@/logo/white-logo.png";
import Image from "next/image";
import { HEADERLINKS } from "@/assests/HeaderLinks";
import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
const Header = () => {
  return (
    <Box sx={{ position: "absolute", top: 0, width: "100%", p: 2 }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src={logo} alt="" width={150} />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={4}
          >
            {HEADERLINKS.map((val, i) => (
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 18,
                  fontFamily: ROBOTO.style,
                }}
                key={i}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
          <Button
            sx={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BLACK,
              fontFamily: ROBOTO.style,
              borderRadius: 8,
              width: 150,
              p: 1,
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
