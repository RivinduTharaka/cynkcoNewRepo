import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Home1() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url("https://vibe.us/blog/advantages-of-interactive-whiteboard/cover_huffa80fae682c771c1add650d0333d320_3937042_1680x0_resize_q90_h2_lanczos_3.9c0e9bee5c0988b98912b635dc7f1e25bb7049e1a13ea701993a695b94a4fb22.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: 4,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(111, 138, 182, 0.75), rgba(30, 64, 175, 0.5))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container sx={{ textAlign: "center", px: 2 }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #1E3A8A, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Revolutionizing
              </Box>
              <br />
              the Way You Connect
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.375rem" },
                fontWeight: 300,
                color: "white",
                maxWidth: "36rem",
                mx: "auto",
                mb: 6,
              }}
            >
              CYNKCO Smart Solutions - Transforming collaboration through innovative technology and seamless integration.
            </Typography>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                px: 5,
                py: 1.8,
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
                bgcolor: "#1E3A8A",
                borderRadius: "50px",
                textTransform: "none",
                border: "2px solid #60A5FA",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#1E40AF",
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                },
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <span>Contact Us</span>
              <ArrowForwardIcon sx={{ fontSize: "1.2rem" }} />
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Home1;
