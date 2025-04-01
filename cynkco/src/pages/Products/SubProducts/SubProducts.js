import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import SubProductsSec1 from "./SubProductsSec1";

// Function to generate a slug from the product name
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

function SubProductsPage() {
  const { categorySlug } = useParams(); // Get the slug from the URL (e.g., "cynkco-vision")
  const location = useLocation(); // Get the location object to access query params
  const queryParams = new URLSearchParams(location.search); // Parse query params
  const pid = queryParams.get("pid"); // Get the pid from the query string (e.g., "P001")

  // // Category mapping to link slugs to recordIds and names
  // const categoryMapping = {
  //   [generateSlug("CYNKCO VISION")]: { recordId: "P001", name: "CYNKCO VISION" },
  //   [generateSlug("CYNKCO CLASSMATE")]: { recordId: "P002", name: "CYNKCO CLASSMATE" },
  //   [generateSlug("CYNKCO MEET")]: { recordId: "P003", name: "CYNKCO MEET" },
  //   [generateSlug("CYNKCO ACCESS")]: { recordId: "P004", name: "CYNKCO ACCESS" },
  //   [generateSlug("CYNKCO ALERTS")]: { recordId: "P005", name: "CYNKCO ALERTS" },
  //   [generateSlug("CYNKCO COMPUTE")]: { recordId: "P006", name: "CYNKCO COMPUTE" },
  //   [generateSlug("CYNKCO STORE")]: { recordId: "P007", name: "CYNKCO STORE" },
  // };

  // Hardcoded sub-products stored individually with pid
  const allSubProducts = [
    {
      id: "SP001",
      pid: "P001",
      name: "CYNKCO Vision Pro",
      description: "4K Ultra HD camera with AI motion detection.",
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/business/solutions/industries/education/interactive-display/OG_Samsung-Interactive-Display-Flip-WM85R-Education-Classroom-hero_1200x630.jpg",
    },
    {
      id: "SP002",
      pid: "P001",
      name: "CYNKCO Vision Lite",
      description: "Affordable 1080p camera with night vision.",
      image:
        "https://res.cloudinary.com/iwh/image/upload/q_auto,g_center/assets/1/7/SMART-For-Education.PNG",
    },
    {
      id: "SP003",
      pid: "P002",
      name: "CYNKCO Classmate 55",
      description: "55-inch interactive SmartBoard with 20-point touch.",
      image: "https://via.placeholder.com/350x200?text=Classmate+55",
    },
    {
      id: "SP004",
      pid: "P002",
      name: "CYNKCO Classmate 75",
      description: "75-inch SmartBoard with 4K display.",
      image: "https://via.placeholder.com/350x200?text=Classmate+75",
    },
    {
      id: "SP005",
      pid: "P003",
      name: "CYNKCO Meet Room",
      description: "All-in-one video conferencing for small rooms.",
      image: "https://via.placeholder.com/350x200?text=Meet+Room",
    },
    {
      id: "SP006",
      pid: "P003",
      name: "CYNKCO Meet Pro",
      description: "Advanced conferencing with 360° audio.",
      image: "https://via.placeholder.com/350x200?text=Meet+Pro",
    },
    {
      id: "SP007",
      pid: "P004",
      name: "CYNKCO Access Bio",
      description: "Biometric access with fingerprint recognition.",
      image: "https://via.placeholder.com/350x200?text=Access+Bio",
    },
    {
      id: "SP008",
      pid: "P004",
      name: "CYNKCO Access RFID",
      description: "RFID-based access control system.",
      image: "https://via.placeholder.com/350x200?text=Access+RFID",
    },
    {
      id: "SP009",
      pid: "P005",
      name: "CYNKCO Alert Basic",
      description: "Simple alarm system with mobile alerts.",
      image: "https://via.placeholder.com/350x200?text=Alert+Basic",
    },
    {
      id: "SP010",
      pid: "P005",
      name: "CYNKCO Alert Pro",
      description: "Advanced alarm with customizable triggers.",
      image: "https://via.placeholder.com/350x200?text=Alert+Pro",
    },
    {
      id: "SP011",
      pid: "P006",
      name: "CYNKCO Compute Laptop",
      description: "High-performance laptop for professionals.",
      image: "https://via.placeholder.com/350x200?text=Compute+Laptop",
    },
    {
      id: "SP012",
      pid: "P006",
      name: "CYNKCO Compute Server",
      description: "Enterprise-grade server for heavy workloads.",
      image: "https://via.placeholder.com/350x200?text=Compute+Server",
    },
    {
      id: "SP013",
      pid: "P007",
      name: "CYNKCO Store SSD",
      description: "Fast SSD storage with 1TB capacity.",
      image: "https://via.placeholder.com/350x200?text=Store+SSD",
    },
    {
      id: "SP014",
      pid: "P007",
      name: "CYNKCO Store NAS",
      description: "Network-attached storage for businesses.",
      image: "https://via.placeholder.com/350x200?text=Store+NAS",
    },
  ];

  // Filter sub-products by pid
  const categoryProducts = allSubProducts.filter(
    (product) => product.pid === pid
  );

  // // Get the category name based on the slug
  // const categoryInfo = categoryMapping[categorySlug] || { name: "Unknown Category" };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <Box>
      <SubProductsSec1 />

      <Box sx={{ py: { xs: 4, sm: 6, md: 7 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, mt: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: { xs: 4, sm: 5, md: 6 },
              color: "text.primary",
            }}
          >
            {categorySlug} {/* {categoryInfo.name}  */}
            Products
          </Typography>

          {categoryProducts.length > 0 ? (
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              justifyContent="center"
            >
              {categoryProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      height: { xs: 340, sm: 360, md: 380 },
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
                      alt={product.name}
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
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: { xs: 1.5, md: 2 },
                        }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              No sub-products found for this category.
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default SubProductsPage;
