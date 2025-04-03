import React from "react";
import { Box, Typography } from "@mui/material";

import "@fontsource/poppins"; // Headings
import "@fontsource/roboto";  // Paragraphs

import backgroundImage from "../../../Assets/Products/productHero.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width:{ md:"100%"},
        height: { xs: "420px", md: "540px" },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3.2rem" },
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          Products
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#e0e0e0",
            px: { xs: 2, md: 0 },
          }}
        >
          Explore Interactive Displays, Smart Boards & Robust Display Stands
          for Seamless Business & Education Experiences
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
