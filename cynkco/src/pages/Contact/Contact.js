import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import contactImg from "../../Assets/Home/contact.jpg"
const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true, error: null });

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: null });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setFormStatus({
        ...formStatus,
        loading: false,
        error: "An error occurred while submitting your request. Please try again.",
      });
    }
  };

  return (
    <Box
      sx={{
        background: "#F1FFF7", // Soft green background
        py: 6,
        px: { xs: 2, md: 10 },
        fontFamily: "Roboto, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={0} sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Image Section (Left) */}
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              height: { xs: "300px", md: "100%" },
              backgroundColor: "#F1FFF7", // Match the page background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Placeholder for overlapping images */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Placeholder image */}
              <Box
                sx={{
                  width: { xs: "200px", md: "400px" },
                  height: { xs: "200px", md: "100%" },
                  backgroundImage: `url(${contactImg})`, // Replace with actual image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Form Section (Right) */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              maxWidth: 900,
              mx: "auto",
              p: { xs: 4, md: 5 },
              // borderRadius: 2,
              bgcolor: "#FFFFFF",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                textAlign: "center",
                mb: 2,
                background: "linear-gradient(45deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Our Team
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#757575",
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Please complete the form below to discuss your business needs with one of our experts.
            </Typography>

            {formStatus.submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your submission. Our team will contact you shortly.
              </Alert>
            )}
            {formStatus.error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {formStatus.error}
              </Alert>
            )}

            <form
              action="https://formsubmit.co/55e5b9f59fce6cd0a042ec9ed8a98709"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Name Fields */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  {["First Name", "Last Name"].map((label, i) => (
                    <TextField
                      key={label}
                      name={label.toLowerCase().replace(" ", "_")}
                      label={label}
                      required
                      fullWidth
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      InputLabelProps={{ shrink: true }}
                      sx={{
                        flex: 1,
                        minWidth: "200px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#24AC4C" },
                          "&:hover fieldset": { borderColor: "#28C96B" },
                          "&.Mui-focused fieldset": { borderColor: "#28C96B" },
                        },
                        "& .MuiInputLabel-root": {
                          fontFamily: "Roboto, sans-serif",
                          color: "#757575",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#28C96B",
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Email and Phone */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                    placeholder="e.g. name@company.com"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      flex: 1,
                      minWidth: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#24AC4C" },
                        "&:hover fieldset": { borderColor: "#28C96B" },
                        "&.Mui-focused fieldset": { borderColor: "#28C96B" },
                      },
                      "& .MuiInputLabel-root": { color: "#757575" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "#28C96B" },
                    }}
                  />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    required
                    fullWidth
                    placeholder="e.g. +1 (555) 123-4567"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      flex: 1,
                      minWidth: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#24AC4C" },
                        "&:hover fieldset": { borderColor: "#28C96B" },
                        "&.Mui-focused fieldset": { borderColor: "#28C96B" },
                      },
                      "& .MuiInputLabel-root": { color: "#757575" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "#28C96B" },
                    }}
                  />
                </Box>

                {/* Message */}
                <TextField
                  name="message"
                  label="Your Message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  placeholder="Let us know how we can help..."
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#24AC4C" },
                      "&:hover fieldset": { borderColor: "#28C96B" },
                      "&.Mui-focused fieldset": { borderColor: "#28C96B" },
                    },
                    "& .MuiInputLabel-root": { color: "#757575" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#28C96B" },
                  }}
                />

                {/* Submit */}
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={formStatus.loading}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "1rem",
                      px: 6,
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(90deg, #006400, #0D47A1)",
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(90deg, #0D47A1, #006400)",
                      },
                      "&:disabled": {
                        background: "#B0BEC5",
                      },
                    }}
                  >
                    {formStatus.loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;