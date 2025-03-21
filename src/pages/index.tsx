import AboutComponent from "@/components/about/About-component";
import Choose from "@/components/choose";
import HeroSection from "@/components/HeroSection";
import ServicesComponent from "@/components/services/Services-component";
import WorkProcess from "@/components/work";
import { COLORS } from "@/utils/enum";
import { Box, Container } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HeroSection />
        <Box sx={{ mt: 20 }}>
          <AboutComponent />
        </Box>
        <Box
          sx={{
            mt: 20,
            backgroundColor: COLORS.GREY_BG,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 4,
            pb: 4,
          }}
        >
          <Container>
            <ServicesComponent />
          </Container>
        </Box>
        <Box sx={{ mt: 20 }}>
          <Choose />
        </Box>
        <Box
          sx={{
            mt: 20,
            backgroundColor: COLORS.GREY_BG,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 4,
            pb: 4,
          }}
        >
          <Container>
            <WorkProcess />
          </Container>
        </Box>
      </Box>
    </>
  );
}
