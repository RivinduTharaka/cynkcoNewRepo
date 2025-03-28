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

function ProductsSec2() {
  const products = [
    {
      name: "CYNKCO VISION",
      category: "Surveillance",
      description:
        "Advanced surveillance system with 4K resolution, night vision, and real-time monitoring.",
      image:
        "https://www.securitysales.com/wp-content/uploads/2020/03/surveillance-cameras.jpg",
      link: "/Smart-Screen-Specs",
    },
    {
      name: "CYNKCO CLASSMATE",
      category: "SmartBoard",
      description:
        "Interactive SmartBoard with Android/Windows Dual OS, multi-touch, and collaboration tools.",
      image:
        "https://vibe.us/blog/advantages-of-interactive-whiteboard/cover_huffa80fae682c771c1add650d0333d320_3937042_1680x0_resize_q90_h2_lanczos_3.9c0e9bee5c0988b98912b635dc7f1e25bb7049e1a13ea701993a695b94a4fb22.webp",
      link: "/Smart-Screen-Specs",
    },
    {
      name: "CYNKCO MEET",
      category: "SmartMeet",
      description:
        "SmartMeet solution for video conferencing with 4K display and seamless integration.",
      image:
        "https://www.viewsonic.com/library/wp-content/uploads/2023/03/Benefits-of-using-touchscreen-for-hybrid-meetings.jpg",
      link: "/meet-specs",
    },
    {
      name: "CYNKCO ACCESS",
      category: "Access Control and Attendance",
      description:
        "Secure access control and attendance system with biometric and RFID support.",
      image:
        "https://www.zkteco.com/upload/image/202209/1663660800_access_control.jpg",
      link: "/access-specs",
    },
    {
      name: "CYNKCO ALERTS",
      category: "Alarm Systems",
      description:
        "Intelligent alarm systems with real-time alerts and customizable triggers.",
      image:
        "https://www.securityinfowatch.com/wp-content/uploads/2021/05/alarm-system.jpg",
      link: "/alerts-specs",
    },
    {
      name: "CYNKCO COMPUTE",
      category: "Notebook, Desktops, Workstations and Servers",
      description:
        "High-performance computing solutions for all your business needs.",
      image:
        "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/business-desktop-computers1597358681471538.jpg",
      link: "/compute-specs",
    },
    {
      name: "CYNKCO STORE",
      category: "Data Storages",
      description:
        "Reliable data storage solutions with high capacity and fast access speeds.",
      image:
        "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/solutions/enterprise-storage/_shared/images/enterprise-storage-hero.jpg",
      link: "/store-specs",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 7 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
            color: "text.primary",
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
          }}
        >
          Product Categories
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                component={Link}
                to={product.link}
                sx={{
                  textDecoration: "none",
                  height: { xs: 360, sm: 380, md: 400 }, // Adjusted height for mobile
                  maxWidth: { xs: "100%", sm: 350 }, // Full width on mobile, capped on larger screens
                  mx: "auto",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: { xs: "none", sm: "translateY(-6px)" }, // Disable hover effect on mobile
                    boxShadow: { xs: 0, sm: 6 }, // No shadow on mobile hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={`${product.name} ${product.category}`}
                  sx={{
                    height: { xs: 180, sm: 190, md: 200 }, // Scaled image height
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/350x200?text=No+Image";
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    px: { xs: 2, md: 3 }, // Adjusted padding
                    py: { xs: 1.5, md: 2 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "text.primary",
                      fontSize: { xs: "1.125rem", sm: "1.25rem" }, // Scaled font size
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: "0.875rem", sm: "0.9375rem" }, // Scaled font size
                      lineHeight: 1.4, // Tighter line height for readability
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      px: { xs: 2, sm: 3 },
                      fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Scaled button text
                      borderRadius: "999px",
                      textTransform: "none",
                      color: "#2596BE",
                      borderColor: "#2596BE",
                      "&:hover": {
                        backgroundColor: "#2596BE",
                        color: "#fff",
                      },
                    }}
                  >
                    More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductsSec2;