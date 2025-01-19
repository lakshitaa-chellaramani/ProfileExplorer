import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(to right, #0d1321, #003049)",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Ready to Get Started?
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Discover profiles, explore their locations, and manage data effortlessly. Join us today and unlock the power of Profile Explorer.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link to="/profiles" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Explore Profiles
        </Button>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "#fff",
            },
          }}
        >
          Admin Panel
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CallToAction;
