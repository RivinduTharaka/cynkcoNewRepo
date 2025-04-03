import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Fade } from "@mui/material";

function ProductsSec1() {
   return (
      <Box
        sx={{
          py: { xs: 8, sm: 10, md: 12, lg: 16 }, // Reduced padding on smaller screens
          backgroundImage: `url("https://images.unsplash.com/photo-1557683316-973673baf926?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGdyYWRpZW50fGVufDB8fDB8fHww")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80%",
          //   background: "rgba(0, 0, 0, 0.5)", // Dark overlay
            zIndex: 1,
          },
          
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 3,
            px: { xs: 2, sm: 3 }, // Adjust padding for smaller screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              minHeight: { xs: "30vh", sm: "40vh", md: "45vh" }, // Adjusted height for mobile
            }}
          >
            {/* Text Section */}
            <Fade in timeout={{ enter: 1000, exit: 500 }}>
              <Box sx={{ maxWidth: { xs: "100%", sm: "600px", md: "800px" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: { xs: 1, md: 2 }, // Reduced margin-bottom on mobile
                    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.5rem" }, // Scaled font sizes
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                    display: "inline-block",
                    animation: { xs: "none", md: "float 3s ease-in-out infinite" }, // Disable animation on mobile
                    "@keyframes float": {
                      "0%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-10px)" },
                      "100%": { transform: "translateY(0)" },
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: { xs: "-6px", md: "-8px" }, // Adjusted underline position
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: { xs: "40px", md: "60px" }, // Smaller underline on mobile
                      height: { xs: "3px", md: "4px" }, // Thinner underline on mobile
                      background: "linear-gradient(90deg, #42A5F5, #1E88E5)",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Cynkco SmartScreen Solutions
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "normal",
                    opacity: 0.9,
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Scaled font sizes
                    lineHeight: { xs: 1.4, md: 1.6 }, // Tighter line height on mobile
                    letterSpacing: "0.5px",
                    mb: { xs: 2, md: 4 }, // Reduced margin-bottom on mobile
                    px: { xs: 1, md: 0 }, // Add padding on mobile for edge spacing
                  }}
                >
                  Experience the future of interactive displays with Cynkco's
                SmartScreen technology, designed for seamless collaboration
                and smarter workspaces.
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
    );
}

export default ProductsSec1;