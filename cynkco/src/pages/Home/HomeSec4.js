import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample images
import bankImg from "../../Assets/Home/bank.jpg";
import medicalImg from "../../Assets/Home/hospital.jpg";
import meetingImg from "../../Assets/Home/meeting.jpg";
import educationImg from "../../Assets/Home/classroom.jpeg";
import retailImg from "../../Assets/Home/retail.jpg";
import logisticsImg from "../../Assets/Home/classroom.jpeg";

const industryData = [
  {
    title: "Bank & Finance Solution",
    image: bankImg,
    description:
      "Interactive whiteboards are revolutionizing banking and finance with real-time data analysis and enhanced decision-making.",
  },
  {
    title: "Medical Care Solution",
    image: medicalImg,
    description:
      "IFP panels support healthcare with better patient consultation, data sharing, and professional collaboration.",
  },
  {
    title: "Meeting Room Solution",
    image: meetingImg,
    description:
      "Smartboards streamline meetings with interactive presentations and real-time collaboration.",
  },
  {
    title: "Education Solution",
    image: educationImg,
    description:
      "Empower learning with engaging lessons, digital annotation, and student interaction in classrooms.",
  },
  {
    title: "Business Solutions",
    image: retailImg,
    description:
      "Digital signage and smart displays attract customers and provide dynamic product experiences in retail.",
  },
 
];

const HomeSec4 = () => {
  return (
    <Box sx={{ mt: 10, mb:4 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "semibold",
          mb: 5,
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
          lineHeight: 1.0,
          background:
            "linear-gradient(90deg, rgb(29, 57, 107), rgb(56, 203, 211), rgb(40, 45, 201))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        One Platform. Endless Possibilities.
      </Typography>

      <Box sx={{ background: "#ECF9FE", py: 6, px: 10, my: 4 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8} // Reduced space
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3600 }}
          breakpoints={{
            600: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "50px", paddingTop: "10px" }}
        >
          {industryData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 4,
                  overflow: "hidden",
                  mx: "auto",
                  maxWidth: 360,
                  height: 400, // ✅ Fixed height for card
                  boxShadow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 2, overflow: "hidden", flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{
                      mb: 1,
                      fontSize: "1.1rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.92rem",
                      lineHeight: 1.5,
                      maxHeight: "4.5rem",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomeSec4;
