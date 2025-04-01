import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";

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
        setFormStatus({
          submitted: true,
          loading: false,
          error: null,
        });
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
        background: "linear-gradient(135deg, #ECF9FE 0%, #E4E9F0 100%)",
        py: 6,
        px: { xs: 3, md: 12 },
      }}
    >
      <Paper
        elevation={2}
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: { xs: 4, md: 4 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight={550}
          textAlign="center"
          sx={{ mb: 2, color: "#1A1A1A", background:
            "linear-gradient(90deg, rgb(12, 51, 124), rgb(61, 158, 190), rgb(24, 11, 125))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",}}
        >
          Contact Our Team
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ mb: 3, color: "#4A4A4A", maxWidth: 600, mx: "auto" }}
        >
          Please complete the form below to discuss your business needs with one of our experts.
        </Typography>

        {formStatus.submitted && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Thank you for your submission. Our team will contact you shortly.
          </Alert>
        )}
        {formStatus.error && (
          <Alert severity="error" sx={{ mb: 4 }}>
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
            {/* First Name and Last Name Row */}
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <TextField
                label="First Name"
                name="first_name"
                placeholder="Enter your first name"
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "#fff", flex: 1, minWidth: "200px" }}
              />
              <TextField
                label="Last Name"
                name="last_name"
                placeholder="Enter your last name"
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "#fff", flex: 1, minWidth: "200px" }}
              />
            </Box>

            {/* Email and Phone Row */}
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                placeholder="e.g., name@company.com"
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "#fff", flex: 1, minWidth: "200px" }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                placeholder="e.g., +1 (555) 123-4567"
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "#fff", flex: 1, minWidth: "200px" }}
              />
            </Box>

            {/* Message Row */}
            <TextField
              label="Your Message"
              name="message"
              placeholder="Please provide details about your inquiry..."
              fullWidth
              required
              multiline
              rows={6}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ backgroundColor: "#fff" }}
            />

            {/* Submit Button */}
            <Box sx={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                disabled={formStatus.loading}
                sx={{
                  mt: 1,
                  px: 6,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  background: "linear-gradient(90deg,rgb(35, 68, 131) 0%, #2596BE 100%)",
                  borderRadius: 1,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #2596BE 0%, rgb(35, 68, 131) 100%)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
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
    </Box>
  );
};

export default Contact;