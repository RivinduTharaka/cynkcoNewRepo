import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Fade } from "@mui/material";

// Images (local file paths from uploads)
import CT590 from "../../../Assets/Products/CT-590.png";
import CT1700 from "../../../Assets/Products/CT-1700.png";
import CT1800 from "../../../Assets/Products/CT-1800.png";
import CT2100 from "../../../Assets/Products/CT-2100.png";
import ProductHeroSection from "./ProductHero";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#388E3C";
const pink = "#E91E63";

const products = [
  {
    name: "CT-590 (Black)",
    image: CT590,
    description: `The CT-590 (Black) is a heavy-duty stand built to support large displays ranging from 86 to 120 inches. Engineered for professional use, it offers a robust 200KG load capacity and features a full 360° horizontal rotation for flexible screen orientation. The cold-rolled steel frame ensures long-lasting stability, while thoughtful additions like the wire harness card design and an integrated storage box make it perfect for organized and efficient environments. With a TV center height of 1450mm and a wide hole distance range from 200x200mm to 1200x600mm, this stand offers precision and adaptability for premium setups.`,
  },
  {
    name: "CT-1700",
    image: CT1700,
    description: `The CT-1700 is a compact yet rugged smart stand crafted for displays between 32 and 70 inches. Designed with flexibility in mind, it features a lifting range from 1250 to 1500mm and a strong frame capable of holding up to 100KG. Its cold-rolled steel body ensures durability, while the included camera tray and center tray make it ideal for smaller collaborative settings, such as classrooms or compact conference rooms. The stand also accommodates varied VESA mounting patterns, making it a versatile choice for dynamic display applications.`,
  },
  {
    name: "CT-1800",
    image: CT1800,
    description: `Built for performance and ergonomic precision, the CT-1800 supports medium to large displays ranging from 42 to 86 inches. With a lifting range of 1100 to 1500mm and a load capacity of 200KG, this stand is a top-tier choice for dynamic display environments. Its solid cold-rolled steel structure, along with camera and center tray inclusions, make it well-suited for education, boardrooms, and digital signage. Supporting hole distances up to 1140mm horizontally and 630mm vertically, the CT-1800 ensures compatibility with a wide range of screens.`,
  },
  {
    name: "CT-2100",
    image: CT2100,
    description: `Engineered for high-impact visual environments, the CT-2100 supports large displays between 52 and 120 inches. With a 200KG weight capacity and adjustable lifting range of 1100 to 1500mm, this stand offers strength and flexibility for large-scale presentations. Crafted from durable cold-rolled steel, it includes both a camera tray and center tray for seamless integrations. The wide hole distance compatibility ensures effortless mounting, while its sleek structure makes it a reliable asset in professional AV setups.`,
  },
];

const StandsPage = () => {
  return (
    <Box>
      <ProductHeroSection />
      <Box sx={{ background: "#FAFFFC", py: {md:6 , xs:4}}}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              mb:{ md:6, xs:3, sm:1},
              textAlign: "center",
              fontSize: { xs: "1.6rem", sm: "2.0rem", md: "2.3rem" },
              lineHeight: {md:1.2},
              background: "linear-gradient(45deg, #006400, #0D47A1 )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Smart Screen Stand Solutions
          </Typography>

          {products.map((product, index) => (
            <Fade in key={index} timeout={1000}>
              <Grid
                container
                spacing={7}
                alignItems="center"
                sx={{ mb: {md:10, xs: 2, sm:2 }, px: { xs: 2, sm:2 }, py: { xs: 2, sm:2 } }}
              >
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                  <Box>
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        display: "block",
                        border: `2px solid ${green}`,
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Grid>

                {/* Description Section */}
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: pink,
                      mb: 2,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.7,
                      textAlign:"justify"
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: green,
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      px: 4,
                      py: 1.2,
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: greenDark,
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

export default StandsPage;
