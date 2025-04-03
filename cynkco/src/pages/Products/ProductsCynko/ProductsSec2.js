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

// Function to generate a slug from the product name
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ""); // Remove special characters
};

function ProductsSec2() {
  const products = [
    {
      recordId: "P001",
      name: "CYNKCO VISION",
      category: "Surveillance",
      description:
        "Advanced surveillance system with 4K resolution, night vision, and real-time monitoring.",
      image:
        "https://safeguardsystems.co.uk/wp-content/uploads/2023/03/how-many-cctv-cameras-do-i-need-to-protect-my-business.jpg",
    },
    {
      recordId: "P002",
      name: "CYNKCO CLASSMATE",
      category: "SmartBoard",
      description:
        "Interactive SmartBoard with Android/Windows Dual OS, multi-touch, and collaboration tools.",
      image:
        "https://vibe.us/blog/advantages-of-interactive-whiteboard/cover_huffa80fae682c771c1add650d0333d320_3937042_1680x0_resize_q90_h2_lanczos_3.9c0e9bee5c0988b98912b635dc7f1e25bb7049e1a13ea701993a695b94a4fb22.webp",
    },
    {
      recordId: "P003",
      name: "CYNKCO MEET",
      category: "SmartMeet",
      description:
        "SmartMeet solution for video conferencing with 4K display and seamless integration.",
      image:
        "https://www.dictation.philips.com/fileadmin/_processed_/7/4/csm_philips-smartmeeting_pse0550_1333390966_e7ec442026.jpg",
    },
    {
      recordId: "P004",
      name: "CYNKCO ACCESS",
      category: "Access Control and Attendance",
      description:
        "Secure access control and attendance system with biometric and RFID support.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMz4Mahyh5ZMImH5o1CKB_Gi4xYwATh7rzyIBRYwM-QqOA53tpjvLlq2WmHXnOqO0GCk&usqp=CAU",
    },
    {
      recordId: "P005",
      name: "CYNKCO ALERTS",
      category: "Alarm Systems",
      description:
        "Intelligent alarm systems with real-time alerts and customizable triggers.",
      image:
        "https://www.securityinfowatch.com/wp-content/uploads/2021/05/alarm-system.jpg",
    },
    {
      recordId: "P006",
      name: "CYNKCO COMPUTE",
      category: "Notebook, Desktops, Workstations and Servers",
      description:
        "High-performance computing solutions for all your business needs.",
      image:
        "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/business-desktop-computers1597358681471538.jpg",
    },
    {
      recordId: "P007",
      name: "CYNKCO STORE",
      category: "Data Storages",
      description:
        "Reliable data storage solutions with high capacity and fast access speeds.",
      image:
        "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/solutions/enterprise-storage/_shared/images/enterprise-storage-hero.jpg",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 7 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.recordId}>
              <Card
                component={Link}
                to={`/products/${generateSlug(product.name)}?pid=${product.recordId}`} // Pass pid as query param
                sx={{
                  textDecoration: "none",
                  height: { xs: 360, sm: 380, md: 400 },
                  maxWidth: { xs: "100%", sm: 350 },
                  mx: "auto",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: { xs: "none", sm: "translateY(-6px)" },
                    boxShadow: { xs: 0, sm: 6 },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={`${product.name} ${product.category}`}
                  sx={{
                    height: { xs: 180, sm: 190, md: 200 },
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
                    px: { xs: 2, md: 3 },
                    py: { xs: 1.5, md: 2 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "text.primary",
                      fontSize: { xs: "1.125rem", sm: "1.25rem" },
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      lineHeight: 1.4,
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      px: { xs: 2, sm: 3 },
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
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