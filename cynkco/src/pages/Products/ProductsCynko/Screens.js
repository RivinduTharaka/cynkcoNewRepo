import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Fade } from "@mui/material";
import ProductHeroSection from "./ProductHero";

import CTSC65A from "../../../Assets/Products/Screens/CT-SC65A.png";
import CTSC65WC from "../../../Assets/Products/Screens/CT-SC65WC.png";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#388E3C";
const pink = "#666";

// Product Data
const screens = [
  {
    name: "CT-SC65WC",
    image: CTSC65WC,
    description:
      "The CT-SC65WC is a 65-inch 4K Ultra HD SmartScreen with an ultra-narrow bezel, featuring a 48-megapixel camera and 8-array microphone for seamless video conferencing. Its zero-lamination process ensures low parallax writing with a ±1mm high-precision infrared touch, perfect for collaborative environments.",
  },
  {
    name: "CT-SC75WC",
    image: "https://via.placeholder.com/400x300.png?text=CT-SC75WC",
    description:
      "The CT-SC75WC offers a 75-inch 4K Ultra HD display with an ultra-narrow bezel design, integrating a 48-megapixel camera and 8-array microphone for enhanced virtual meetings. With dual-pen, dual-color writing and wireless screen transfer, it’s ideal for dynamic team collaborations.",
  },
  {
    name: "CT-SC65A",
    image: CTSC65A,
    description:
      "The CT-SC65A is a 65-inch 4K Ultra HD SmartScreen with a sleek, ultra-narrow bezel design, optimized for smooth writing with ±1mm high-precision infrared touch. It supports dual-pen, dual-color writing and wireless screen sharing, making it a great choice for interactive presentations.",
  },
  {
    name: "CT-SC86WC",
    image: "https://via.placeholder.com/400x300.png?text=CT-SC86WC",
    description:
      "The CT-SC86WC boasts an expansive 86-inch 4K Ultra HD display with an ultra-narrow bezel, equipped with a 48-megapixel camera and 8-array microphone for superior video conferencing. Its high-precision touch and dual-pen writing capabilities make it perfect for large-scale collaborative settings.",
  },
  {
    name: "CT-SC75A",
    image: "https://via.placeholder.com/400x300.png?text=CT-SC75A",
    description:
      "The CT-SC75A features a 75-inch 4K Ultra HD display with a minimalist ultra-narrow bezel, designed for smooth, low-parallax writing with ±1mm touch accuracy. Supporting dual-pen, dual-color writing and wireless screen transfer, it’s well-suited for interactive team brainstorming sessions.",
  },
  {
    name: "CT-SC85A",
    image: "https://via.placeholder.com/400x300.png?text=CT-SC85A",
    description:
      "The CT-SC85A delivers an impressive 86-inch 4K Ultra HD display with an ultra-narrow bezel, offering ±1mm high-precision infrared touch for smooth writing. With dual-pen, dual-color writing and wireless screen sharing, it’s an excellent fit for large, interactive meeting spaces.",
  },
];

const ScreensPage = () => {
  return (
    <Box>
      <ProductHeroSection />
      <Box sx={{ background: "#FAFFFC", py: { md: 6, xs: 4 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              mb: { md: 6, xs: 3, sm: 1 },
              textAlign: "center",
              fontSize: { xs: "1.6rem", sm: "2.0rem", md: "2.3rem" },
              lineHeight: { md: 1.2 },
              background: "linear-gradient(45deg, #006400, #0D47A1 )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Cynkco SmartScreen Displays
          </Typography>

          {screens.map((screen, index) => (
            <Fade in key={index} timeout={1000}>
              <Grid
                container
                spacing={6}
                alignItems="center"
                sx={{ mb: 10, px: { xs: 2, sm: 4 } }}
              >
                {/* Image Section */}
                <Grid item size={{ md: 6, xs: 12 }}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      maxWidth: "500px",
                      mx: "auto",
                    }}
                  >
                    <Box
                      component="img"
                      src={screen.image}
                      alt={screen.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>

                {/* Description Section */}
                <Grid item size={{ md: 6, xs: 12 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: pink,
                      mb: 2,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {screen.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.7,
                    }}
                  >
                    {screen.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: greenDark,
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      px: 4,
                      py: 1.2,
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: green,
                      },
                    }}
                  >
                    Inquire Now
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default ScreensPage;
