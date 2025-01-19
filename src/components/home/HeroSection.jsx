import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #0d1321, #003049)",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Discover Profiles, Explore Locations!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: "600px" }}>
          Navigate through user profiles and visualize their geographic locations effortlessly with Profile Explorer.
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <a href="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
          >
            Get Started
          </Button>
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderColor: "#fff",
              "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            Learn More
          </Button>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default HeroSection;

