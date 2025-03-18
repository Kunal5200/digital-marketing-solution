import { COLORS } from "@/utils/enum";
import { ROBOTO } from "@/utils/fonts";
import { ABOUT_BOX_PROPS } from "@/utils/types";
import { Box, Container, Typography } from "@mui/material";
const AboutBox = ({
  img,
  heading,
  description,
  value,
  height,
}: ABOUT_BOX_PROPS) => {
  return (
    <Box
      sx={{
        position: "relative",
        ":hover": {
          ".img-bg": {
            transform: "scale(1.1)",
          },
          transform: "translateY(-10px)",
        },
        ".img-bg": {
          transition: "0.5s ease all",
        },
        overflow: "hidden",
        borderRadius: 4,
        transition: "0.5s ease all",
        height: height,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "100%",
          borderRadius: 4,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: 3,
        }}
        className="img-bg"
      ></Box>
      <Container sx={{ position: "absolute", top: 20, height: "100%" }}>
        <Typography
          sx={{
            color: COLORS.WHITE,
            fontFamily: ROBOTO.style,
            fontWeight: 600,
            fontSize: 25,
            letterSpacing: 3,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: COLORS.GREY_TEXT,
            fontFamily: ROBOTO.style,
            fontWeight: 500,
            fontSize: 18,
            //   letterSpacing: 3,
            mt: 2,
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            fontSize: 50,
            fontFamily: ROBOTO.style,
            color: COLORS.WHITE,
            position: "absolute",
            bottom: 20,
            right: 20,
            fontWeight: 700,
          }}
        >
          {value}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutBox;
