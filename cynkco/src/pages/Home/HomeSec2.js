import React from "react";
import {
  Box,
  Typography,
  Item,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import smartScreen2 from "../../Assets/smartScreen2.jpg";


const HomeSec2 = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const specs = [
    ["Android 13.0", "8G+128G", "4K UI+ 4K Panel"],
    ["48MP Camera", "8-array microphone", "2.4G/5G Wifi Module"],
  ];

  return (
    <Box sx={{ my: { md: "70px", sm: "50" }, py: "20px" }} sm>
      <Grid container spacing={2} sx={{ px: 5 }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ px: 5, justifyContent: "center" }}>
          <Box
            component="img"
            src={smartScreen2}
            sx={{
              width: "100%",
              maxWidth: 600,
              height: "auto",
              borderRadius: 2,
              boxShadow: 2,
              justifyContent: "center",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ px: "10px" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                lineHeight: 1.2,
                background:
                  "linear-gradient(90deg, rgb(82, 110, 163), rgb(40, 161, 201), rgb(40, 45, 201))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Ultimate Smart Display
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "#555",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" },
                lineHeight: 1.2,
              }}
            >
              The latest series of Horion M6APro interactive touch screen board
              appearance uses zero fit process.
            </Typography>

            {/* Specs Section */}
          <Grid container spacing={2} sx={{ maxWidth: 450 }}>
            {specs.map((column, colIndex) => (
              <Grid item xs={6} key={colIndex}>
                {column.map((spec, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      color: "#333",
                    }}
                  >
                    • {spec}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSec2;
