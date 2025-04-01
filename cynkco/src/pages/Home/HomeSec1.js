import React from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import herohome from "../../Assets/herohome.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/specs");
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%", // Maximum width for larger screens
              margin: "0 auto", // Center the image
            }}
            onClick={handleImageClick}
          >
            <img
              src={herohome}
              alt="CYNKCO smart screens"
              style={{
                width: "100%", // Make the image responsive
                height: "auto", // Maintain aspect ratio
                display: "block", // Remove any inline spacing
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
