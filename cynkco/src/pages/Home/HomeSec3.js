import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import screen1 from "../../Assets/Home/screen1.png";

// Sample Data
const productData = [
  { id: 1, title: "M5APro", image: screen1 },
  { id: 2, title: "Video Wall", image: screen1 },
  { id: 3, title: "Content Management", image: screen1 },
  {
    id: 4,
    title: "Accessories",
    image:
      "https://res.cloudinary.com/iwh/image/upload/q_auto,g_center/w_1024,h_768,c_lpad/assets/1/26/SmartBoard_SBM685-laser-S_Interactive_whiteboard_kit.jpg",
  },
];

const HomeSec3 = () => {
  const [activeId, setActiveId] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setActiveId(1); // Set initial activeId to 1
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "semibold",
          mb: 5,
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
          lineHeight: 1.0,
          background:
            "linear-gradient(90deg, rgb(29, 57, 107), rgb(40, 161, 201), rgb(40, 45, 201))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CYNKCO : Inspire. Innovate. Collaborate.
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          textAlign: "justify",
          justifyContent: "center",
          mb: 4,
          color: "#777E81",
          px: { md: 12, xs: 1 },
          fontSize: { xs: "0.9rem", md: "1.1rem" },
        }}
      >
        CYNKCO is a leading provider of next-generation smart display solutions,
        specializing in Interactive Flat Panel Displays (IFPDs), video walls,
        digital signage, content management systems, and essential accessories.
        Designed to empower innovation and seamless collaboration, CYNKCO
        products deliver cutting-edge performance, intuitive user experiences,
        and versatile integration across educational, corporate, and public
        environments. Transform your communication, engagement, and learning
        experiences with CYNKCO's smart technology solutions.
      </Typography>

      {/* Mobile Swiper */}
      {isSmallScreen ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "30px" }}
        >
          {productData.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mx: "auto",
                  maxWidth: 300,
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography fontWeight={600}>{product.title}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop Grid with Hover Expand
        <Grid container sx={{ justifyContent: "center", borderRadius: 2 }}>
          {productData.map((product) => {
            const isActive = activeId === product.id;
            return (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={isActive ? 6 : 3}
                onMouseEnter={() => setActiveId(product.id)}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: isActive ? "#D1E9F6" : "#ECF9FE",
                }}
              >
                <Box
                  sx={{
                    height: 300,
                    borderRadius: 3,
                    background: isActive ? "#D1E9F6" : "#ECF9FE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 3,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      maxHeight: isActive ? 220 : 150,
                      objectFit: "contain",
                      mb: 2,
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                  <Typography
                    variant={isActive ? "h5" : "subtitle1"}
                    align="center"
                    fontWeight={600}
                    sx={{ mb: isActive ? 2 : 0 }}
                  >
                    {product.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default HomeSec3;
