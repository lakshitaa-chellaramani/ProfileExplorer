import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003049",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Typography variant="body2">
            <Link to ="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link to ="/profiles" style={{ color: "#fff", textDecoration: "none" }}>
              Profiles
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link to ="/admin" style={{ color: "#fff", textDecoration: "none" }}>
              Admin Panel
            </Link>
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: support@profileexplorer.com</Typography>
          <Typography variant="body2">Phone: +1 234 567 890</Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/lakshitaa-chellaramani"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          mt: 4,
          fontSize: "0.9rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          pt: 2,
        }}
      >
        © {new Date().getFullYear()} Profile Explorer. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
