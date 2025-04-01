import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

// Placeholder images (replace with real product images if available)
const productImages = [
  "https://via.placeholder.com/300x200.png?text=Product+1",
  "https://via.placeholder.com/300x200.png?text=Product+2",
  "https://via.placeholder.com/300x200.png?text=Product+3",
];

function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  const handleCompareChange = (productName) => {
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((name) => name !== productName)
        : [...prev, productName]
    );
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "semibold",
            mb: 5,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
            lineHeight: 1.0,
            background:
              "linear-gradient(80deg, rgb(18, 47, 102), rgb(53, 156, 177), rgb(24, 11, 125))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Product spotlight
        </Typography>

        {/* Products Grid */}
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
                }}
              >
                {/* "NEW" Badge */}
                {product.isNew && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      bgcolor: "#2596be",
                      color: "white",
                      px: 1.2,
                      py: 0.4,
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      borderRadius: "4px",
                      zIndex: 2,
                    }}
                  >
                    NEW
                  </Box>
                )}

                {/* Product Image */}
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

                {/* Product Content */}
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
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
                      color: "#666",
                      mb: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button sx={{ backgroundColor: "" }}>more</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Link */}
        <Box sx={{ textAlign: "right", mt: 4 }}>
          <Button
            component={Link}
            to="/products"
            sx={{
              color: "#1E3A8A",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: "#60A5FA" },
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
