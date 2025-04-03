import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const productImages = [
  "https://via.placeholder.com/300x200.png?text=Product+1",
  "https://via.placeholder.com/300x200.png?text=Product+2",
  "https://via.placeholder.com/300x200.png?text=Product+3",
];

function Products() {
  const products = [
    {
      name: "CYNKCO CLASSMATE",
      description:
        "4 MP Smart Hybrid Light with ColorVu Fixed Turret Network...",
      image:
        "https://vibe.us/blog/advantages-of-interactive-whiteboard/cover_huffa80fae682c771c1add650d0333d320_3937042_1680x0_resize_q90_h2_lanczos_3.9c0e9bee5c0988b98912b635dc7f1e25bb7049e1a13ea701993a695b94a4fb22.webp",
      isNew: true,
    },
    {
      name: "DS-2XS6A87G1-L/C32S80(N...",
      description: "4K ColorVu Fixed Bullet Solar Power 4G Network Camera Kit",
      image: productImages[1],
      isNew: false,
    },
    {
      name: "DS-2CD2786G2H-LIPTRZS...",
      description:
        "8 MP Smart Hybrid Light with ColorVu Motorized PTRZ Varifoc...",
      image: productImages[2],
      isNew: true,
    },
  ];

  return (
    <Box sx={{ py:2 }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            mb: 5,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" },
            lineHeight: 1.3,
            background: 'linear-gradient(45deg, #006400, #0D47A1 )',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Product Spotlight
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: 300,
                  height: 400,
                  bgcolor: "#FFFFFF",
                }}
              >
                {/* NEW badge */}
                {product.isNew && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      bgcolor: "#24AC4C",
                      color: "#FFFFFF",
                      px: 1.2,
                      py: 0.4,
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      borderRadius: "4px",
                      zIndex: 2,
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    NEW
                  </Box>
                )}

                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />

                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      color: "#1D6B44",
                      mb: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#757575",
                      mb: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#24AC4C",
                      color: "#FFFFFF",
                      textTransform: "none",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#9DD338",
                      },
                    }}
                  >
                    More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "right", mt: 4 }}>
          <Button
            component={Link}
            to="/products"
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "#1D6B44",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { color: "#28C96B" },
            }}
            endIcon={<Box component="span">→</Box>}
          >
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Products;
